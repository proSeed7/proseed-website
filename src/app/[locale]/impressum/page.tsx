import Footer from "@/app/components/Footer";
import {useTranslations} from "next-intl";

export default function Impressum() {

    const t = useTranslations('Impressum');

    return (
      <div className={'container flex flex-col min-h-section-height w-full'}>
            {/*<div className="mt-20 w-full flex flex-col gap-2">
                <h1 className={'text-xl lg:text-3xl font-semibold text-accent-color mb-4'}>{t('company')}</h1>
                <span>{t('address1')}</span>
                <span>{t('address2')}</span>
                <span className={'font-semibold'}>{t('office')}</span>
                <span>{t('officeAddress')}</span>
                <span>{t('officeAddress2')}</span>
                <span>{t.rich('email', {
                    email: (chunks) => <a className={'underline underline-offset-2 font-semibold'} href={`mailto:${chunks}`}>{chunks}</a>
                })}</span>
                <span>{t('taxes')}</span>
                <span>{t('court')}</span>
                <span>{t('court2')}</span>
                <span className={'font-semibold'}>{t('companyDirector')}</span>
                <span>{t('person1')}</span>
                <span>{t('person2')}</span>
            </div>*/}
          <Footer/>
      </div>
    );
}