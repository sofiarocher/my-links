import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faLinkedinIn, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";



function Icons() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div className="m-auto ">
        <a target="_blank" href="https://www.instagram.com/srocher_/"><FontAwesomeIcon icon={faInstagram} className="text-xl hover:scale-110 mr-4 sm:mr-8 sm:text-3xl" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/sofiarocher/"><FontAwesomeIcon icon={faLinkedinIn} className="text-xl hover:scale-110 mr-4 sm:mr-8 sm:text-3xl"  /></a>
        <a target="_blank" href="https://www.tiktok.com/@srocher"><FontAwesomeIcon icon={faTiktok} className="text-xl hover:scale-110 mr-4 sm:mr-8 sm:text-3xl"  /></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCBSOvpxyqLs2s3Rq7PKd_Sg"><FontAwesomeIcon icon={faYoutube} className="text-xl hover:scale-110 mr-4 sm:mr-8 sm:text-3xl"  /></a>
        <a target="_blank" href="https://discord.gg/gy4E4eygjg"><FontAwesomeIcon icon={faDiscord} className="text-xl hover:scale-110 mr-4 sm:mr-8 sm:text-3xl"  /></a>
        <button onClick={changeLanguage}>
          <FontAwesomeIcon icon={faGlobe} className="text-xl hover:scale-110 sm:text-3xl" />
        </button>
    </div>
  )
}

export default Icons