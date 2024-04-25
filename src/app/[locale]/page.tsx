import StageSection from "@/app/components/Sections/StageSection";
import MissionSection from "@/app/components/Sections/MissionSection";
import HowSection from "@/app/components/Sections/HowSection";
import WhatSection from "@/app/components/Sections/WhatSection";
/*import ProsperitySection from "@/app/components/Sections/ProsperitySection";*/
import ContactSection from "@/app/components/Sections/ContactSection";
import CareerSection from "@/app/components/Sections/CareerSection";

import ScrollToNextSection from "@/app/components/ScrollToNextSection";

type Props = {
    params: {locale: string};
};
export default function Home({params: {locale}}: Props) {

  return (
      <main className="main relative flex flex-col">
          <StageSection locale={locale} />
          <MissionSection locale={locale} />
          <HowSection locale={locale} />
          <WhatSection locale={locale} />
          {/*<ProsperitySection locale={locale} />*/}
          <ContactSection locale={locale} />
          <CareerSection locale={locale} />
      </main>
  );
}
