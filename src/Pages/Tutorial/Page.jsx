// Styles
import "./Style.css";

// Data
import Content from "../../Data/Content";

// Components
import UseWrapper from "../../Components/Common/UseWrapper";
import TutorialSection from "../../Components/Common/TutorialSection";
import ScrollIndicator from "../../Components/Common/ScrollIndicator";

// Dependencies
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Tutorial() {
  function HeroSection() {
    const HeroContent = Content.pagesContents.tutorial.hero;
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
  function AddProductSection() {
    return <TutorialSection data={Content.pagesContents.tutorial.addProduct} />;
  }
  function UpgradeLinkingSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.upgradeLinking} />
    );
  }
  function UpgradeUnlinkingSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.upgradeUnlinking} />
    );
  }
  function AddCustomerSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.addCustomer} />
    );
  }
  function LinkCustomerSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.linkCustomer} />
    );
  }
  function AddEngineerSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.addEngineer} />
    );
  }
  function LinkEngineerSection() {
    return (
      <TutorialSection data={Content.pagesContents.tutorial.linkEngineer} />
    );
  }
  function ReachUsSection() {
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
      wrapper: HeroSection(),
    },
    {
      className: "add-product-section",
      wrapper: AddProductSection(),
    },
    {
      className: "upgrade-linking-section",
      wrapper: UpgradeLinkingSection(),
    },
    {
      className: "upgrade-unlinking-section",
      wrapper: UpgradeUnlinkingSection(),
    },
    {
      className: "add-customer-section",
      wrapper: AddCustomerSection(),
    },
    {
      className: "link-customer-section",
      wrapper: LinkCustomerSection(),
    },
    {
      className: "add-engineer-section",
      wrapper: AddEngineerSection(),
    },
    {
      className: "link-engineer-section",
      wrapper: LinkEngineerSection(),
    },
    {
      className: "reach-us-section",
      wrapper: ReachUsSection(),
    },
  ];
  return (
    <main className="tutorial-page">
      <ScrollIndicator />
      {Sections.map((section, index) => (
        <section key={index} className={section.className}>
          {section.wrapper}
        </section>
      ))}
    </main>
  );
}
