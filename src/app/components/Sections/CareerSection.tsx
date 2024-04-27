import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";
import Image from "next/image";

import Illustration from "../../../../public/SectionImages/partying.svg";
import Footer from "@/app/components/Footer";

interface CareerSectionProps {
    locale: string;
}

export default function CareerSection({ locale }: CareerSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('CareerSection');

    return (
        <section id="careerSection" className={'container w-full flex flex-col'}>
            <div className="relative h-full w-full flex flex-col items-center justify-center py-8">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-20 md:gap-8">
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl md:leading-normal text-accent-green font-semibold">
                            {t('title')}
                        </h2>
                        <p className="text-xl md:text-3xl md:leading-normal">
                            {t('text')}
                        </p>
                    </div>
                    <Image className={'lg:order-1 section-illu'} alt={'Section Image'} src={Illustration}/>
                </div>
            </div>
            <Footer/>
        </section>
    );
}
