import { useEffect, useState } from "react";
import bgVideo from "../assets/bgVideo.jpg"
import Icons from "./Icons";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    const [text, setText] = useState<string>("");
    const textToType: any = t("portfolio");
    const delay = 350;
    const loopDelay = 1000; 
  
    useEffect(() => {
      startAnimation();
    }, []);
  
    const startAnimation = () => {
      typeText(0);
    };
  
    const typeText = (index: number) => {
      if (index < textToType.length) {
        setTimeout(() => {
          setText((prevText) => prevText + textToType[index]);
          typeText(index + 1);
        }, delay);
      } else {
        setTimeout(() => {
          setText("");
          startAnimation();
        }, loopDelay);
      }
    };

  return (
    <div className='overflow-x-hidden text-white/80'>
        <img src={bgVideo} className='h-[100%] w-[100%] -z-10 absolute top-0 bottom-0' />
        <div className='px-4 md:px-10 lg:px-20 xl:px-40 w-full md:w-[80%] h-screen flex flex-col justify-center items-center text-brown space-y-5 m-auto text-center text-montserrat pt-24'>
            <span className='font-bold text-5xl md:text-6xl lg:text-8xl'>
                Sofía Rocher
            </span>
            <span className='text-2xl md:text-4xl font-semibold w-full md:w-[78%] pb-8 md:pb-20'>
              {t("front")}
            </span>
            <button className='sm:w-auto px-7 py-2 rounded-full font-bold text-md md:text-2xl duration-200 border-2 hover:bg-white hover:text-black'>
                <a href="/project">{t("projects")}</a>
            </button>
            <span className="text-md md:text-sm font-semibold w-full md:w-[78%] pt-20">
                {textToType.slice(0, text.length)}
            </span>
            <div className="pt-20">
                <Icons />
            </div>
        </div>
    </div>
  )
}

export default Home