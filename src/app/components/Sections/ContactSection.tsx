import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";
import Image from "next/image";
import Illustration from "../../../../public/SectionImages/exploring.svg";
import ScrollToNextSection from "@/app/components/ScrollToNextSection";

interface ContactSectionProps {
    locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('ContactSection');

    return (
        <section id="contactSection" className={'container w-full'}>
            <div className="relative h-full w-full flex flex-col items-center justify-center pb-40">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-20 md:gap-8">
                    <div className="lg:order-2 flex flex-col gap-8 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl md:leading-normal text-accent-green font-semibold">
                            {t('title')}
                        </h2>
                        <p className="text-xl md:text-3xl md:leading-normal">
                            {t('text')}
                        </p>
                    </div>
                    <Image className={'lg:order-1'} alt={'Section Image'} src={Illustration}/>
                </div>
                <ScrollToNextSection className={'absolute bottom-0'} sectionId={'careerSection'}/>
            </div>
        </section>
    );
}
