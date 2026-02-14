import Link from "next/link";
import { FaUser } from "react-icons/fa";

const CardLink = (props: any) => {
  const { icons, title, desc, url, bgPrimary, bgSecond } = props;
  return (
    <Link
      href={url}
      className={`md:w-83.75 w-full h-20 ${bgPrimary} rounded-xl p-3 flex items-center gap-3 hover:scale-[101%] transition-all hover:border-2`}
    >
      <div
        className={`h-full w-14 ${bgSecond} rounded-md flex justify-center items-center border`}
      >
        {icons}
      </div>
      <div className={`flex flex-col`}>
        <h3 className={`text-md font-semibold`}>{title}</h3>
        <p className={`text-xs`}>{desc}</p>
      </div>
    </Link>
  );
};

export default CardLink;
