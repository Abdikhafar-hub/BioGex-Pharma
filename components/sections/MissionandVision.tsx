import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type SectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type MissionVisionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const MissionVision = (props: MissionVisionProps) => {
  const { sections = [] } = { ...props, ...MissionVisionDefaults };
  return (
    <section className="px-[5%] py-8 pt-16">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
        {sections.map((section, index) => (
          <div key={index}>
            {/* <p className="mb-3 font-semibold md:mb-4">{section.tagline}</p> */}
            <h3 className="mb-5 text-xl text-slate-500 font-bold leading-[1.2] md:mb-6 md:text-2xl lg:text-4xl">
              {section.heading}
            </h3>
            <p className="mt-5 md:mt-6">{section.description}</p>
            {/* <div className="mt-6 flex items-center gap-4 md:mt-8 w-full">
              {section.buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export const MissionVisionDefaults: MissionVisionProps = {
  sections: [
    {
      tagline: "mission",
      heading: "Our Mission",
      description:
        "To provide quality, affordable pharmaceutical products to improve the wellbeing of communities.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
    {
      tagline: "Vision",
      heading: "Our Vision",
      description:
        "To be the leading end-to-end pharmaceutical distributor in Africa, building for a better and healthier future.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
  ],
};

MissionVision.displayName = "MissionVision";
