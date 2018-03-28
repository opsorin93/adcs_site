import { Contact, DespreNoi, LandingPage, Proiecte, Servicii, Sustine, Login, Register } from "../../app/views/web";

const routes = [
    {
        path: "/contact",
        component: Contact,
        exact: true,
    },
    {
        path: "/aboutus",
        component: DespreNoi,
        exact: true,
    },
    {
        path: "/",
        component: LandingPage,
        exact: true,
    },
    {
        path: "/projects",
        component: Proiecte,
        exact: true,
    },
    {
        path: "/services",
        component: Servicii,
        exact: true,
    },
    {
        path: "/sustine",
        component: Sustine,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
    {
        path: "/register",
        component: Register,
        exact: true,
    },
];

export default routes;
