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
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo(".hero-section .wrapper .decor", { scale: 0 }, { scale: 1 });
    gsap.fromTo(
      ".hero-section .wrapper .overlay .title p",
      { y: 0, opacity: 1, scale: 1 },
      {
        y: 200,
        opacity: 0,
        scale: 5,
        filter: "blur(30px)",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "50% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".hero-section .wrapper .overlay .subtitle p",
      { y: 0, opacity: 1, scale: 1 },
      {
        y: 400,
        opacity: 0,
        scale: 5,
        filter: "blur(30px)",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "50% center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.utils.toArray(".info-subtitle").forEach((subtitle) => {
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 50, filter: "blur(30px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: subtitle,
            start: "top center",
            end: "bottom center",
            scrub: false,
            stagger: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  function HeroSection() {
    const HeroContent = Content.pagesContents.home.hero;
    return UseWrapper(
      <>
        <div className="decor"></div>
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
            <div key={index} className="info-subtitle">
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
  function FeaturesSection() {
    const FeaturesContent = Content.pagesContents.home.features;
    return UseWrapper(
      <>
        <div className="title">
          <p>{FeaturesContent.title}</p>
        </div>
        <div className="subtitles">
          {FeaturesContent.subtitles.map((subtitle, index) => (
            <div key={index} className="subtitle">
              <p>{subtitle}</p>
            </div>
          ))}
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
      className: "features-section",
      wrapper: <FeaturesSection />,
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
