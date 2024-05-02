'use client';

import {useParams} from 'next/navigation';
import {useState, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '../../navigation';

type Props = {
  defaultValue: string; // Default locale
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

  // State to track the current locale
  const [currentLocale, setCurrentLocale] = useState(defaultValue);

  // Function to toggle between locales
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

  const flagIcon = currentLocale === 'en' ? '🇺🇸' : '🇩🇪';

  return (
      <label
          className={'text-2xl p-1 ml-auto md:ml-0 order-3 relative transition-opacity [&:disabled]:opacity-30'}
      >
        <p className="sr-only">{label}</p>
        <button
            className="inline-flex appearance-none bg-transparent border-none"
            disabled={isPending}
            onClick={toggleLocale}
        >
          {flagIcon}
        </button>
      </label>
  );
}
