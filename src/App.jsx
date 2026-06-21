import About from "./components/About.jsx";
import Campus from "./components/Campus.jsx";
import CareerJourney from "./components/CareerJourney.jsx";
import Contact from "./components/Contact.jsx";
import EyeVineDivider from "./components/EyeVineDivider.jsx";
import Hero from "./components/Hero.jsx";
import Life from "./components/Life.jsx";
import OtherAttempts from "./components/OtherAttempts.jsx";
import { profile } from "./data/profile.js";

export default function App() {
  return (
    <>
      <div className="site-background" aria-hidden="true" />
      <div className="site-overlay" aria-hidden="true" />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <CareerJourney
          items={profile.careerJourney}
          detailImage={profile.assets.mapDetail}
          flowerOpen={profile.assets.flowerOpen}
          flowerClosed={profile.assets.flowerClosed}
        />
        <EyeVineDivider
          openImage={profile.assets.vineEyesOpen}
          closedImage={profile.assets.vineEyesClosed}
        />
        <Campus profile={profile} />
        <Life profile={profile} />
        <OtherAttempts items={profile.otherAttempts} vineImage={profile.assets.rightVine} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
