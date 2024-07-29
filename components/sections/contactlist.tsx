import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact24 = (props: Contact24Props) => {
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-xl text-slate-500 font-bold md:mb-6 md:text-2xl lg:text-4xl">{heading}</h2>
          {/* <p className="md:text-md">{description}</p> */}
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className=" text-emerald-600">{contact.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">
                {contact.title}
              </h3>
              <p className="">{contact.description}</p>
              {/* <a
                className="underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                href={contact.link.url}
              >
                {contact.link.label}
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact24Defaults: Contact24Props = {
  tagline: "Tagline",
  heading: "Contact List",
  description: "Get in touch with us",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "INFO@BIOGEXPHARMA.COM",
      link: {
        label: "INFO@BIOGEXPHARMA.COM",
        url: "#",
      },
    },
    {
      icon: <BiMessageDetail className="size-12" />,
      title: "WhatsApp chat",
      description:
        "+254 748 763980",
      link: {
        label: "Start new chat",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "+254 748 763980",
      link: {
        label: "+254 748 763980",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Office",
      description:
        "OFFICE 7, THE CLOSE, NGARA ROAD, NAIROBI KENYA",
      link: {
        label: "OFFICE 7, THE CLOSE, NGARA ROAD, NAIROBI KENYA",
        url: "#",
      },
    },
  ],
};

Contact24.displayName = "Contact24";
