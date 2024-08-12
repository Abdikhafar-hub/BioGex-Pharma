import { BiEnvelope, BiMap, BiLogoWhatsapp, BiPhone } from "react-icons/bi";

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
      <div className="container flex items-center justify-center flex-col w-full">
        <div className="mb-12 flex flex-col items-center justify-center  md:mb-18 lg:mb-20 w-full">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-xl text-slate-500 font-bold md:mb-6 md:text-2xl lg:text-4xl">{heading}</h2>
          {/* <p className="md:text-md">{description}</p> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex flex-col w-full  items-center justify-center  gap-6 ">
            {contacts.map((contact, index) => (
              <div key={index} className="flex  items-center pl-4 md:pl-40  gap-4 w-full">
                <div className=" text-emerald-600">{contact.icon}</div>
                {/* <h3 className="mb-3 text-xl font-semibold">
                  {contact.title}
                </h3> */}
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
          <div className="w-full min-h-full max-h-full">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2667.124983906028!2d36.827296213401674!3d-1.2773106548249473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1742cd47a12d%3A0x15dd5266c11e7803!2sBioGex%20Pharma!5e0!3m2!1sen!2ske!4v1722244080305!5m2!1sen!2ske"  style={{border:0}}allowFullScreen={false} loading="lazy" 
                 className="w-full min-h-96"
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
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
      icon: <BiMap className="size-8" />,
      title: "Office",
      description:
        "OFFICE 7, THE CLOSE, NGARA ROAD, NAIROBI KENYA",
      link: {
        label: "OFFICE 7, THE CLOSE, NGARA ROAD, NAIROBI KENYA",
        url: "#",
      },
    },
    {
      icon: <BiEnvelope className="size-8" />,
      title: "Email",
      description:
        "INFO@BIOGEXPHARMA.COM",
      link: {
        label: "INFO@BIOGEXPHARMA.COM",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-8" />,
      title: "Phone",
      description:
      "+254 748 763980",
      link: {
        label: "+254 748 763980",
        url: "#",
      },
    },
    {
      icon: <BiLogoWhatsapp className="size-8" />,
      title: "WhatsApp chat",
      description:
        "+254 748 763980",
      link: {
        label: "Start new chat",
        url: "#",
      },
    },
  ],
};

Contact24.displayName = "Contact24";
