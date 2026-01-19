import Link from "next/link";

const ContactText = ({ title, value, link, text }: any) => (
  <div className="flex flex-col">
    <span className="font-bold text-[17px]">{title}</span>
    {link ? (
      <Link
        href={value ? value : "/"}
        target="_blank"
        className="text-sm text-black/50 hover:underline hover:underline-offset-4"
      >
        {text}
      </Link>
    ) : (
      <span className="text-sm text-black/50">{value}</span>
    )}
  </div>
);

export default ContactText;
