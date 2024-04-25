import Image from "next/image";
import ScrollToNextSection from "@/app/components/ScrollToNextSection";
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

import Illustration from "../../../../public/SectionImages/team-collab.svg";

interface WhatSectionProps {
    locale: string;
}

export default function WhatSection({ locale }: WhatSectionProps) {

    unstable_setRequestLocale(locale);
    const t = useTranslations('WhatSection');

    return (
        <section id="whatSection" className={'container w-full'}>
            <div className="relative h-full w-full flex flex-col items-center justify-center pb-40">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-20 md:gap-8">
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl md:leading-normal text-accent-green font-semibold">
                            {t('title')}
                        </h2>
                        <p className="text-xl md:text-3xl md:leading-normal">
                            {t('text')}
                        </p>
                    </div>
                    <Image className={'max-w-md lg:max-w-full'} alt={'Section Image'} src={Illustration}/>
                </div>
                <ScrollToNextSection className={'absolute bottom-0'} sectionId={'contactSection'}/>
            </div>
        </section>
    );
}