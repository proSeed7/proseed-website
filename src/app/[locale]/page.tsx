import Image from "next/image";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
    params: {locale: string};
};
export default function Home({params: {locale}}: Props) {

    unstable_setRequestLocale(locale);
    const t = useTranslations('IndexPage');

  return (
      <main className="main flex flex-col">
          <section className={'container w-full'}>
              <h1 className={'text-2xl pb-8'}>{t('title')}</h1>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 1</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 2</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 3</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 4</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400 '}>
              <h2>Section 5</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 6</h2>
          </section>
          <section className={'container w-full min-h-52 border border-lime-400'}>
              <h2>Section 7</h2>
          </section>
      </main>
  );
}
