import Home from "../../components/home/Home";
import New from "../../components/new/New";
import Edit from "../../components/edit/Edit";

export const routing = [
    {
        title: 'Home',
        component: Home,
        path: ['/', '/home'],
        exact: true
    },
    {
        title: 'New',
        component: New,
        path: '/new',
        exact: false
    },
    {
        title: 'Edit',
        component: Edit,
        path: '/edit',
        exact: false
    }
]
