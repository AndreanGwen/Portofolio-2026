import { useState } from "react";
import { GoEye } from "react-icons/go";
import { motion } from "motion/react";

const CardEducation = (props: any) => {
  const { items } = props;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      className={`h-40 w-[288px] border-2 rounded-xl border-blue-950 border-b-8 p-2 flex flex-col justify-between`}
    >
      <div className={"flex flex-col gap-1"}>
        <h1 className={`text-xl font-bold text-black/80`}>
          {items.educationName}
        </h1>
        <p className={`text-sm`}>{items.educationDetail}</p>
      </div>
      <div className={"flex justify-between items-center"}>
        <div className="w-fit h-fit text-xs bg-black/10 p-2 rounded-md font-semibold">
          {items.educationCategory}
        </div>
        <div
          onClick={() => setSelectedImage(items?.educationImage)}
          className="w-10 h-10 flex items-center justify-center 
             bg-[#ffd43b] rounded-full border-2 border-blue-950 
             cursor-pointer hover:bg-[#ffbf00] transition"
        >
          <GoEye size={18} />
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="preview"
              className="w-[90vw] max-w-225 max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CardEducation;
