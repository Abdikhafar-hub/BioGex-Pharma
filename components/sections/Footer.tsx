import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
  const { logo, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 bg-gray-900 text-gray-200 decoration-gray-400">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12  lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 pb-4">
              <Link href='/'>
                <Image src='/logofullbgless.png' alt="Biogex Logo" width={65} height={65} className="w-full" />
              </Link>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a href={link.url} className="focus-visible:outline-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} className="focus-visible:outline-none">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-gray-400" />
        <div className="pt-2 flex flex-col-reverse items-center justify-center justify-items-center  text-sm md:flex-row md:gap-x-6 ">
          <span className="my-0">{footerText}</span>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline underline-offset-2 ">
                <a href={link.url} className="focus-visible:outline-none">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults: Footer4Props = {
  logo: {
    url: "#",
    src: "./logofullbgless.png",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about" },
        { title: "Products", url: "/products" },
        { title: "Services", url: "/#services" },
        // { title: "Blog", url: "/" },

      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-5 text-[#3b5998]" /> },
    { url: "#", icon: <BiLogoInstagram className="size-5 text-[#e4405f]" /> },
    { url: "#", icon: <FaXTwitter className="size-5 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-5 text-[#0077b5]" /> },
    { url: "#", icon: <BiLogoYoutube className="size-5 text-[#ff0000]" /> },
  ],
  footerText: "© 2024 BioGex. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};

Footer4.displayName = "Footer4";
