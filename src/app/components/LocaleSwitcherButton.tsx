'use client';

import {useParams} from 'next/navigation';
import {useState, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '../../navigation';

import ukFlag from '../../../public/uk-flag.png';
import deFlag from '../../../public/de-flag.png';
import Image from "next/image";

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherButton({
                                               defaultValue,
                                               label
                                             }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const [currentLocale, setCurrentLocale] = useState(defaultValue);

  function toggleLocale() {
    const nextLocale = currentLocale === 'en' ? 'de' : 'en';
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
      setCurrentLocale(nextLocale);
    });
  }

  const flagIcon = currentLocale === 'en' ? deFlag : ukFlag;

  return (
      <button
          className="inline-flex appearance-none bg-transparent border-none ml-auto md:ml-0 -mb-0.5 mr-1 order-3"
          disabled={isPending}
          onClick={toggleLocale}
      >
        <Image className={'w-8 h-auto'} src={flagIcon} alt={label}/>
      </button>
  );
}
