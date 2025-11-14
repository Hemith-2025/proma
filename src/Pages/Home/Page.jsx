// Styles
import "./Style.css";

// Data
import Content from "../../Data/Content";

// Components
import UseWrapper from "../../Components/Common/UseWrapper";

// Dependencies
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  function HeroSection() {
    const HeroContent = Content.pagesContents.home.hero;
    return UseWrapper(
      <>
        <div className="image-wrapper">
          <img src={HeroContent.image.src} alt={HeroContent.image.alt} />
        </div>
        <div className="overlay">
          <div className="title">
            <p>{HeroContent.title}</p>
          </div>
          <div className="subtitle">
            <p>{HeroContent.subtitle}</p>
          </div>
        </div>
      </>
    );
  }
  function InfoSection() {
    const InfoContent = Content.pagesContents.home.info;
    return UseWrapper(
      <>
        <div className="title">
          <p>{InfoContent.title}</p>
        </div>
        <div className="subtitles">
          {InfoContent.subtitles.map((subtitle, index) => (
            <div key={index} className="subtitle">
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
        <div className="link">
          <NavLink to={InfoContent.link.slug}>
            <p>{InfoContent.link.label}</p>
          </NavLink>
        </div>
      </>
    );
  }
  function ReachUs() {
    const ReachUsContent = Content.pagesContents.home.reachus;
    return UseWrapper(
      <>
        <div className="title">
          <p>{ReachUsContent.title}</p>
        </div>
        <div className="subtitles">
          {ReachUsContent.subtitles.map((subtitle, index) => (
            <div key={index} className="subtitle">
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
        <div className="link">
          <NavLink to={ReachUsContent.link.slug}>
            <p>{ReachUsContent.link.label}</p>
          </NavLink>
        </div>
      </>
    );
  }
  const Sections = [
    {
      className: "hero-section",
      wrapper: <HeroSection />,
    },
    {
      className: "info-section",
      wrapper: <InfoSection />,
    },
    {
      className: "reachus-section",
      wrapper: <ReachUs />,
    },
  ];
  return (
    <main className="home-page">
      {Sections.map((section, index) => (
        <section key={index} className={section.className}>
          {section.wrapper}
        </section>
      ))}
    </main>
  );
}
