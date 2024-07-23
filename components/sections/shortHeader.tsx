import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  bgSrc: string;
};

export type Header62Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header62 = (props: Header62Props) => {
  const { tagline, heading, description, buttons, bgSrc } = {
    ...Header62Defaults,
    ...props,
  } as Props;
  return (
    <header className={`px-[5%] py-12 pt-16 bg-[url('/pillsinbowlsgreenbg.jpg')] w-full flex flex-col items-center justify-center `}>
      <div className="container max-w-3xl text-center">
        {/* <p className="mb-3 font-semibold text-slate-100 md:mb-4">{tagline}</p> */}
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-emerald-50">{heading}</h1>
        <p className="md:text-md text-slate-100">{description}</p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          {buttons && buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export const Header62Defaults: Header62Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//   buttons: [
//     {
//       title: "Button",
//     },
//     {
//       title: "Button",
//       variant: "secondary",
//     },
//   ],
};

Header62.displayName = "Header62";
