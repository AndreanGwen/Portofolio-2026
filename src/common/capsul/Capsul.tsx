const Capsul = (props: any) => {
  const { desc, color } = props;
  return (
    <div
      className={`text-xs text-gray-600 flex items-center justify-center ${color} w-fit px-2.5 py-0.5 rounded-full hover:scale-105 transition font-semibold select-none`}
    >
      {desc}
    </div>
  );
};

export default Capsul;
