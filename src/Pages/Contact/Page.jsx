// Styles
import "./Style.css";

// Data
import Content from "../../Data/Content";

// Components
import UseWrapper from "../../Components/Common/UseWrapper";
import ContactForm from "../../Components/Common/ContactForm";
import ContactRESTAPIForm from "../../Components/Common/EmailRESTAPI";

// Dependencies
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  function HeroSection() {
    const HeroContent = Content.pagesContents.contact.hero;
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
    const InfoContent = Content.pagesContents.contact.info;
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
  function FormSection(){
    return UseWrapper(
        <>
            <ContactForm />
            <ContactRESTAPIForm />
        </>
    )
  }
  const Sections = [
    {
      className: "Hero-section",
      wrapper: HeroSection(),
    },
    {
      className: "Info-section",
      wrapper: InfoSection(),
    },
    {
      className: "Form-section",
      wrapper: FormSection(),
    },
  ];
  return (
    <main className="contact-page">
      {Sections.map((Section, index) => (
        <section key={index} className={Section.className}>
          {Section.wrapper}
        </section>
      ))}
    </main>
  );
}
