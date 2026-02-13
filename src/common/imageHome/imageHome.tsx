import Image from "next/image";

const ImageHome = () => {
  return (
    <>
      <div className={`w-full h-fit pt-2 flex gap-2`}>
        <Image
          src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770963085/20230521_112504_hdqt27.jpg"
          alt="main-photo"
          width={400}
          height={400}
          className="md:w-60 md:h-80 w-43.75 h-60 object-cover rounded-xl"
        />
        <div className={`flex flex-wrap gap-2 justify-center`}>
          <Image
            src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770984589/Screenshot_2026-02-13_at_19.09.42_y6bft6.png"
            alt="main-photo"
            width={400}
            height={400}
            className="md:w-52.5 md:h-39 w-43.75 h-29 object-cover rounded-xl"
          />
          <Image
            src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770982606/WhatsApp_Image_2025-12-04_at_16.55.35_vuye6z.jpg"
            alt="main-photo"
            width={400}
            height={400}
            className="md:w-52.5 md:h-39 w-43.75 h-29 object-cover rounded-xl object-bottom"
          />
          <Image
            src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983957/Screenshot_2026-02-13_at_18.59.08_jdzhyd.png"
            alt="main-photo"
            width={400}
            height={400}
            className="md:w-52.5 md:h-39 object-fill rounded-xl hidden md:block"
          />
          <Image
            src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983323/WhatsApp_Image_2025-12-04_at_08.17.44_oii40n.jpg"
            alt="main-photo"
            width={400}
            height={400}
            className="md:w-52.5 md:h-39 object-cover rounded-xl hidden md:block"
          />
        </div>
      </div>
      <div className={`flex gap-2 pt-2`}>
        <Image
          src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983957/Screenshot_2026-02-13_at_18.59.08_jdzhyd.png"
          alt="main-photo"
          width={400}
          height={400}
          className="w-43.75 h-29 object-fill rounded-xl md:hidden block"
        />
        <Image
          src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983323/WhatsApp_Image_2025-12-04_at_08.17.44_oii40n.jpg"
          alt="main-photo"
          width={400}
          height={400}
          className="w-43.75 h-29 object-cover rounded-xl md:hidden block"
        />
      </div>
    </>
  );
};

export default ImageHome;
