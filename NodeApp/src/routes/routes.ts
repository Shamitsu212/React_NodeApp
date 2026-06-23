import Main_Page from "../components/pages/Main_Page/Main_Page";
import Add_Page from "../components/pages/Add_Page/Add_Page";

export const routes = [
    {
        path: "/",
        Component: Main_Page
    },
    {
        path: "/add",
        Component: Add_Page
    },
]