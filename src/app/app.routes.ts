import { Routes } from '@angular/router';
import { Home } from '../Components/Pages/home/home';
import { Shop } from '../Components/Pages/shop/shop';
import { ContactUs } from '../Components/Pages/contact-us/contact-us';
import { NotFound } from '../Components/Pages/not-found/not-found';

export const routes: Routes = [
    {path:"" , component:Home},
    { path: "shop", component: Shop },
    { path: "shop/:catId", component: Shop },
    {path:"contact" , component: ContactUs},
    { path: "**", component: NotFound }
];
