import { Contact, DespreNoi, LandingPage, Proiecte, Servicii, Sustine } from "../../app/views/web";

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
        path: "/support",
        component: Sustine,
        exact: true,
    },
];

export default routes;
