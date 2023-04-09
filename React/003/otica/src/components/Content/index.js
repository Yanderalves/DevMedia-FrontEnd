import React from "react";

import SectionProducts from "../SectionProducts";
import SectionAbout from "../SectionAbout";
import SectionContact from "../SectionContact";
import Banner from "../Banner";

export default function Content(){
    return (
        <main>
            <Banner/>
            <SectionProducts/>
            <SectionAbout/>
            <SectionContact/>
        </main>
    )
};