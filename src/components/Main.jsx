import "./Main.css";
import SecTiontestimonials from "./SecTiontestimonials";
import SectionAbout from "./SectionAbout";
import SectionHero from "./SectionHero";
import SectionHighlights from "./SectionHightlights";

export default function Main() {
  return (
    <main>
      <SectionHero />
      <SectionHighlights />
      <SecTiontestimonials />
      <SectionAbout />
    </main>
  );
}
