import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import SectionHeading from "./SectionHeading";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type CorValuesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CorValues = (props: CorValuesProps) => {
  const { sections = [] } = { ...props, ...CorValuesDefaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <SectionHeading
          tagline="values"
          title="Our Core Values"
          description="We are committed to excellence in everything we do."
         />
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col ">
            {/* <div className="mb-5 md:mb-6">
              <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
            </div> */}
            <h3 className="mb-5 text-slate-500 text-lg font-bold md:mb-6 md:text-xl md:leading-[1.3] lg:text-2xl">
              {section.heading}
            </h3>
            <p>{section.description}</p>
            {/* <div className="mt-6 flex items-center gap-4 md:mt-8">
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

// Customer Focus: We prioritize the needs of our customers and strive to exceed their expectations.
// Innovation: We embrace innovation to enhance our products and services continuously.
// Teamwork: We believe in the power of teamwork and collaboration to achieve our goals.
// Excellence: We are committed to excellence in everything we do.
export const CorValuesDefaults: CorValuesProps = {
  sections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "customer focus",
      description:
        "We prioritize the needs of our customers and strive to exceed their expectations.",
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
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "innovation",
      description:
        "We embrace innovation to enhance our products and services continuously.",
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
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Teamwork",
      description:
        "We believe in the power of teamwork and collaboration to achieve our goals.",
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
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Excellence",
      description:
        "We are committed to excellence in everything we do.",
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

CorValues.displayName = "CorValues";
