import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { motion } from "motion/react";

const CardCustom = (props: any) => {
  const { items } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      tabIndex={0}
      className="
        group
        md:w-[356px] w-full h-44
        border-2 border-b-8 border-blue-950
        rounded-xl
        relative overflow-hidden
        focus:outline-none
      "
    >
      <Image
        alt="img-project"
        src={items?.projectImage}
        fill
        className="object-cover"
      />

      {/* Github Icon */}
      <Link
        href={items?.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute right-1 top-1
          hidden w-9 h-9
          bg-[#9dc8db]
          rounded-full
          border-2 border-blue-950
          justify-center items-center
          group-hover:flex
          group-focus-within:flex
        "
      >
        <FiGithub size={20} />
      </Link>

      {/* Bottom Info */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-[#9dc8db]
          z-10
          flex flex-col
          px-3
          border-t-2 border-blue-950
          transition-all duration-300
          h-10 pt-1.5
          group-hover:h-20
          group-focus-within:h-20
        "
      >
        <div className={`flex gap-1 items-center`}>
          <h1 className="text-black text-md font-bold">{items?.projectName}</h1>
          <span
            className={`bg-black text-white text-[11px] flex justify-center items-center rounded-sm pr-1 pl-1 font-semibold`}
          >
            {items?.projectCategory}
          </span>
        </div>

        <p
          className="
            text-xs text-black
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            group-focus-within:opacity-100
            group-focus-within:translate-y-0
          "
        >
          {items?.projectDetail}
        </p>
      </div>
    </motion.div>
  );
};

export default CardCustom;
