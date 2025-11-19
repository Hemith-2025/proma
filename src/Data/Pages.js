// Pages
import Home from "../Pages/Home/Page";
import Tutorial from "../Pages/Tutorial/Page";
import Contact from "../Pages/Contact/Page";
// Forms
import AddProduct from "../Pages/AddProduct/Page";

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

const Forms = [
    {
        title: "Add Product",
        slug: "/add-product",
        component: <AddProduct />
    }
]

export { Pages, Forms };