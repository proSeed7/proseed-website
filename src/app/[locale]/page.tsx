import StageSection from "@/app/components/Sections/StageSection";
import MissionSection from "@/app/components/Sections/MissionSection";
import HowSection from "@/app/components/Sections/HowSection";
import ProsperitySection from "@/app/components/Sections/ProsperitySection";
import ContactSection from "@/app/components/Sections/ContactSection";
import CareerSection from "@/app/components/Sections/CareerSection";

type Props = {
    params: {locale: string};
};
export default function Home({params: {locale}}: Props) {

  return (
      <main className="main flex flex-col">
          <StageSection locale={locale} />
          <MissionSection locale={locale} />
          <HowSection locale={locale} />
          <ProsperitySection locale={locale} />
          <ContactSection locale={locale} />
          <CareerSection locale={locale} />
      </main>
  );
}
