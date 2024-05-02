import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherButton from './LocaleSwitcherButton'; // Make sure the import path is correct

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
      <LocaleSwitcherButton
          defaultValue={locale}
          label={t('label')}
      />
  );
}