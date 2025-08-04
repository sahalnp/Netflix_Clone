import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Movies } from "../components/Movies";
import { HeroSection } from "../components/HeroSection";
import { requests } from "../../services/MovieApi";
import React from "react";

export const Home = () => {
    const {Popular,Upcoming,TopRated,HeroBanner, Family,Mystery}=requests
    return (
        <div>
            <Navbar />
            <HeroSection url={HeroBanner} />
            <Movies  title={"Top Rated"} url={TopRated} />
            <Movies title={"Upcoming"} url={Upcoming} />
            <Movies title={"Popular Movies"} url={Popular} />
             <Movies title={"Family"} url={Family} />
             <Movies title={"Mystery"} url={Mystery} />
            <Footer />  
        </div>
    );
};
