import { useEffect, useState } from "react";
import bgVideo from "../assets/bgVideo.jpg"
import Icons from "./Icons";
import Slider from 'react-slick';
import { faChevronLeft, faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import fran from "../assets/fran.png"
import malay from "../assets/malay.png"
import cyber from "../assets/cybermonkeys.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";


function Projects() {
    const { t } = useTranslation();
    const [text, setText] = useState<string>("");
    const textToType: any = t("projectsP");
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

  return (
    <div className='overflow-x-hidden text-white/80'>
        <img src={bgVideo} className='h-[100%] w-[100%] -z-10 absolute top-0 bottom-0' />
        <div className='px-4 md:px-10 lg:px-20 xl:px-40 w-full md:w-[80%] h-screen flex flex-col justify-center items-center text-brown space-y-5 m-auto text-center text-montserrat pt-24'>
            <span className='font-bold text-5xl md:text-6xl lg:text-8xl'>
                Sofía Rocher
            </span>
            <span className='text-2xl md:text-4xl font-semibold w-full md:w-[78%] pb-8 md:pb-20'>
                {t("frontP")}
            </span>
            <div className="w-[90%] sm:w-[50%] bg-gray-100/10  border-2 border-gray-300/10 rounded-xl shadow-xl py-6 sm:py-6">
                <Slider {...settings}>
                    <div className="flex flex-col items-center justify-center">
                        <img src={fran} className="w-[90%] sm:w-[60%] mx-auto"/>
                        <p className="text-2xl font-bold pt-2">Media Growth Hub</p>
                        <p className="text-sm pt-2 px-1"> {t("web1")}</p>
                        <a href="https://francastro.netlify.app/" target="_blank"><FontAwesomeIcon icon={faLink} className="mt-2"  /></a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={malay} className="w-[90%] sm:w-[60%] mx-auto"/>
                        <p className="text-2xl font-bold pt-2">MK Networkinc</p>
                        <p className="text-sm pt-2 px-1"> {t("web2")}</p>
                        <a href="https://www.mknetworkinc.com/" target="_blank"><FontAwesomeIcon icon={faLink} className="mt-2"  /></a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={cyber} className="w-[90%] sm:w-[60%] mx-auto"/>
                        <p className="text-2xl font-bold pt-2">Cybermonkeys</p>
                        <p className="text-sm pt-2 px-1"> {t("web3")}</p>
                        <a href="https://www.cybermonkeys.co/" target="_blank"><FontAwesomeIcon icon={faLink} className="mt-2" /></a>
                    </div>
                </Slider>
            </div>
            <span className="text-md md:text-sm font-semibold w-full md:w-[78%] pt-10">
                 {textToType.slice(0, text.length)}
             </span>
            <div className="pt-5 pb-10">
                <Icons/>
            </div>
        </div>
    </div>
  )
}

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, right: '10px', zIndex: 1 }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-black" />
      </div>
    );
  };
  
  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, left: '10px', zIndex: 1 }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </div>
    );
  };

export default Projects