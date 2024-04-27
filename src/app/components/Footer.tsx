import {useTranslations} from "next-intl";
import Logo from "@/app/components/Logo";
import FooterNavigation from "@/app/components/FooterNavigation";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {

    const t2 = useTranslations('Navigation');

    const translations = {
        why: t2('why'),
        mission: t2('mission'),
        how: t2('how'),
        what: t2('what'),
        /*prosperity: t2('prosperity'),*/
        contact: t2('contact'),
        career: t2('career')
    };

    const t = useTranslations('Footer');

    const footerJobs = []

    for (let i = 1; i <= 8; i++) {
        footerJobs.push(t(`job${i}`));
    }

    return (
        <footer id="footer" className={'container w-full mt-auto'}>
            <div className="grid sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-4 min-h-52 mb-10">
                <div className="col-0 flex flex-col gap-8">
                    <Logo hasText={true} className={'w-36 h-36'}/>
                    <span className={'text-xl md:leading-normal'}>{t('text')}</span>
                    <div className="flex gap-4 text-4xl">
                        <a className={'hover:text-accent-green'} href="https://www.instagram.com/" target="_blank">
                            <FaSquareInstagram />
                        </a>
                        <a className={'hover:text-accent-green'} href="https://www.linkedin.com/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:row-start-2 md:row-start-auto gap-8">
                    <span className={'text-xl md:leading-normal'}>
                        {t('column1Title')}
                    </span>
                    <FooterNavigation translations={translations}/>
                </div>
                <div className="flex flex-col sm:row-start-2 md:row-start-auto gap-8">
                    <span className={'text-xl md:leading-normal'}>
                        {t('column2Title')}
                    </span>
                        <div className="grid grid-cols-2">
                        {footerJobs.map(link => (
                            <span className={'text-lg'} key={link}>{link}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
);
}