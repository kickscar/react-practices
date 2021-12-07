import React from 'react';
import {Outlet} from "react-router";
import SiteLayout from "../../layout/SiteLayout";
import Navigation from "./Navigation";

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}