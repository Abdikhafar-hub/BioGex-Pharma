"use client";
import { useState, useEffect } from "react";

import Button from "./Button";
import type { ImageProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Whatsapp from "./whatsapp";

type LinkProps = {
  title: string;
  url: string;
};

type MenuLinkProps = LinkProps & {
  subLinks?: LinkProps[];
};

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  link: string;
};

type Props = {
  logo: ImageProps;
  links: MenuLinkProps[];
  buttons: ButtonProps[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> & Props;

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.8rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};


const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const dropDownVariants = {
  open: {
    height: "var(--height-open, 100dvh)",
    transition: { duration: 0.2 },
  },
  close: {
    height: "var(--height-closed, 0)",
    transition: { duration: 0.3 },
  },
};

export const Navbar1 = (props: Navbar1Props) => {
  const { logo, links, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const notHome = pathname === '/none'

  const navBgClass = scrollPosition > 80  || notHome ? 'bg-emerald-100 text-black lg:min-h-12' : ' bg-transparent  lg:text-white lg:min-h-20';
  const imgsrc = scrollPosition > 80  || notHome ? "/logofullgreenbgless.png" : "/logofullbgless.png";
  const motiondivbg = scrollPosition > 80  || notHome ? "bg-green-700" : "bg-white";

  if (pathname.match('/studio')) {
    return null;
  } else {
    return (
      <nav className={`flex w-full items-center  fixed top-0  lg:px-[5%] z-30 ${navBgClass} transition-colors duration-300`}>
        <div className="size-full lg:flex lg:items-center lg:justify-between">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <div className="flex items-center">
              <Link href='/'>
                <Image src={imgsrc} alt="Biogex Logo" width={65} height={65} className="w-full" />
              </Link>
              {/* <div className="flex flex-col">
                <h1 className="text-xl leading-none font-extrabold text-emerald-700">BioGex</h1>
                <p className="text-emerald-600 leading-none text-md font-light">Pharma</p>
              </div> */}
            </div>
            {/* <Whatsapp /> */}
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                className={`my-[3px] h-0.5 w-5 ${motiondivbg}`}
                animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.div
                className={`my-[3px] h-0.5 w-5 ${motiondivbg}`}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.div
                className={`my-[3px] h-0.5 w-5 ${motiondivbg}`}
                animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            animate={mobileMenuOpen ? "open" : "close"}
            initial="close"
            variants={dropDownVariants}
            className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]  bg-white lg:bg-inherit"
          >
            {links.map((link, index) => (
              <div key={`${link.title}-${index}`} className="first:pt-4 lg:first:pt-0">
                {link.subLinks && link.subLinks.length > 0 ? (
                  <NavItemDropdown subLinks={link.subLinks} title={link.title} onClick={handleLinkClick} />
                ) : (
                  <Link href={`/${link.url}`} passHref
                  onClick={handleLinkClick}
                      className="relative mx-auto block py-3 text-md font-semibol hover:text-emerald-500    lg:px-4 lg:py-2 lg:text-base"
                    >
                    
                      
                      {link.title}
                   
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col items-start gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
              {buttons.map((button, index) => (
                <Link href={button.link}  onClick={handleLinkClick} key={`${button.title}-${index}`} passHref>
               
                    <Button variant={button.variant} title={button.title} />
                
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    );
  }
};

const NavItemDropdown = ({ title, subLinks, onClick }: { title: string; subLinks: LinkProps[], onClick: () => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-md  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary  lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <AnimatePresence>
          <motion.div
            animate={dropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <RxChevronDown className="size-4" />
          </motion.div>
        </AnimatePresence>
      </button>
      {dropdownOpen && (
        <AnimatePresence>
          <motion.ul
            animate={dropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.3 }}
            className="lg:bg-emerald-600/30 bg-inherit text-black lg:text-white lg:absolute rounded-lg  lg:p-2 lg:[--y-close:25%]"
          >
            {subLinks.map((subLink, index) => (
              <li
                key={`${subLink.title}-${index}`}
                className="relative mx-auto whitespace-nowrap py-3 pl-[5%] text-left align-top text-md lg:px-4 lg:py-2 lg:text-base hover:text-emerald-500 lg:hover:text-emerald-200"
              >
                <Link legacyBehavior href={`/${subLink.url}`} passHref>
                  <a
                    onClick={onClick}
                    className=""
                  >
                    {subLink.title}
                  </a>
                </Link>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </nav>
  );
};

export const Navbar1Defaults: Navbar1Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Home", url: "#" },
    { title: "About Us", url: "about" },
    { title: "Blog", url: "#" },
    { title: "Products", url: "products" },
    {
      title: "Services",
      url: "#",
      subLinks: [
          { title: "Distribution", url: "#" },
          { title: "Import", url: "#" },
        { title: "Manufacturing", url: "#" },
      ],
    },
  ],
  buttons: [
    // {
    //   title: "Button",
    //   variant: "secondary",
    //   size: "sm",
    //   link: ""
    // },
    {
      title: "Get a quote",
      size: "sm",
      variant: "primary",
      link: ""
    },
  ],
};

Navbar1.displayName = "Navbar1";