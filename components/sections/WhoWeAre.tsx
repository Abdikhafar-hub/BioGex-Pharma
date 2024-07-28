// import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";
import Button from "./Button";
import { MissionVision } from "./MissionandVision";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type WhoWeAreProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const WhoWeAre = (props: WhoWeAreProps) => {
  const { tagline, heading, description, buttons, image } = {
    ...WhoWeAreDefaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 bg-gradient-to-t from-emerald-100 via-emerald-50 to-white bg-no-repeat bg-cover">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div
          className="flex flex-col items-center justify-center md:justify-start md:items-start  text-ceter md:text-left w-full"
        >
            <p className="text-xs text-emerald-400  md:text-sm mb-2 bg-emerald-600/10 border border-emerald-300/50 p-1 w-fit rounded-lg font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-slate-600  text-xl font-bold md:mb-6 md:text-2xl lg:text-4xl">{heading}</h2>
            <p className="md:text-md text-slate-500">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}/>
              ))}
            </div>
          </div>
          <div
          className="rounded-lg"
          >
            {/* <img src={image.src} className="w-full object-cover" alt={image.alt} /> */}
            <Image
              src={image.src}   
              alt={image?.alt}
              width={500}
              height={1000}
              className=" w-full h-full bg-cover rounded-lg"
            />
          </div>
        </div>
        <MissionVision/>
      </div>
    </section>
  );
};

export const WhoWeAreDefaults: WhoWeAreProps = {
  tagline: "about us",
  heading: "Who We Are",
  description:
    "Founded in 2024, Biogex Pharmaceuticals is dedicated to improving the wellbeing of communities by providing quality and affordable pharmaceutical products. As a leading distributor, importer, and local manufacturer, we strive to build a healthier future through innovation, teamwork, and excellence.",
  buttons: [
    { title: "Our Story", variant: "secondary" },
    // {
    //   title: "Button",
    //   variant: "link",
    //   size: "link",
    //   iconRight: <RxChevronRight className="size-6" />,
    // },
  ],
  image: {
    src: "/greenpillsgreenbg.jpg",
    alt: "Placeholder image",
  },
};

WhoWeAre.displayName = "WhoWeAre";
