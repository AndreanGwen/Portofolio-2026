import Link from "next/link";

const ContactIcon = (props: any) => {
  const { href, icon, label } = props;
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-black/5 transition"
    >
      <div className="w-10 h-10 rounded-full border flex items-center justify-center">
        {props.icon}
      </div>
      <span className="text-xs text-black/60">{props.label}</span>
    </Link>
  );
};

export default ContactIcon;
