import React from 'react';
import {Route} from "react-router-dom";
import SiteLayout from "../../layout/SiteLayout";
import Navigation from "./Navigation";
import Me from "./Me";
import Location from "./Location";

export default function About() {
    return (
        <SiteLayout>
            <Route component={Navigation} />
            <Route path='/about/kickscar' component={Me} />
            <Route path='/about/location' component={Location} />
        </SiteLayout>
    );
}