import { Routes } from '@angular/router';
import { ColorPalette } from './color-palette/color-palette';

export const routes: Routes = [

    {
        path:"generator",
        component: ColorPalette
    },
    {
        path: "",
        redirectTo: "generator",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "generator",
        pathMatch: "full"
    }
];
