import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";
import Image from "next/image";
import Illustration from "../../../../public/SectionImages/exploring.svg";
import ScrollToNextSection from "@/app/components/ScrollToNextSection";
import ContactForm from "../ContactForm";

interface ContactSectionProps {
    locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('ContactSection');

    const translationValues = {
        "name": t('form.name'),
        "email": t('form.email'),
        "message": t('form.message'),
        "sendBtn": t('form.send-btn'),
        "nameError": t('form.name-error'),
        "emailError": t('form.email-error'),
        "emailValidation": t('form.email-validation'),
        "messageError": t('form.message-error'),
        "success": t('form.success'),
        "fail": t('form.fail')
    }

    return (
        <section id="contactSection" className={'container w-full'}>
            <div className="relative h-full w-full flex flex-col gap-12 md:gap-20 items-center justify-center pb-40">
                <div className="flex flex-col gap-4 text-center lg:text-left ">
                    <h2 className="text-3xl md:text-5xl md:leading-normal text-accent-green font-semibold">
                        {t('title')}
                    </h2>
                    <p className="text-xl md:text-3xl md:leading-normal">
                        {t('text')}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 items-center justify-items-center w-full">
                    <Image className={'hidden md:block section-illu max-w-sm'} alt={'Section Image'} src={Illustration}/>
                    <ContactForm className={'w-full max-w-lg md:justify-self-start'} translations={translationValues}/>
                </div>
                <ScrollToNextSection className={'absolute bottom-0'} sectionId={'careerSection'}/>
            </div>
        </section>
    );
}
