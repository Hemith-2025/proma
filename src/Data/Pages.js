import Home from "../Pages/Home/Page";
import Tutorial from "../Pages/Tutorial/Page";
import Contact from "../Pages/Contact/Page";

const Pages = [
    {
        title: "Home",
        slug: "/",
        component: <Home />
    },
    {
        title: "Tutorial",
        slug: "/tutorial",
        component: <Tutorial />
    },
    {
        title: "Contact",
        slug: "/contact",
        component: <Contact />
    }
];

export default Pages;