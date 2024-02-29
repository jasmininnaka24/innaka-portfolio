"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

// icon imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// photo imports
import Photo from "../public/aboutphoto.png";
import Bootstrap from "../public/skillset/bootstrap.png";
import CSS from "../public/skillset/css.png";
import ExpressJs from "../public/skillset/express.png";
import FastAPI from "../public/skillset/fastapi.png";
import HTML from "../public/skillset/html.png";
import Javascript from "../public/skillset/javascript.png";
import JQuery from "../public/skillset/jquery.png";
import Laravel from "../public/skillset/laravel.png";
import MySQL from "../public/skillset/mysql.png";
import PHP from "../public/skillset/php.png";
import ReactJS from "../public/skillset/react.png";
import SequelizeJS from "../public/skillset/sequelize.png";
import SocketIO from "../public/skillset/socket.png";
import Tailwind from "../public/skillset/tailwind.png";

import Website from "../public/website.png";
import Mobile from "../public/mobile.png";
import Desktop from "../public/monitor.png";
import Design from "../public/design.png";

// component imports
import Navbar from "./(components)/HomePage/Navbar";
import HeroSection from "./(components)/HomePage/HeroSection";
import AboutSection from "./(components)/HomePage/AboutSection";
import ProjectSection from "./(components)/HomePage/ProjectSection";
import QualificationSection from "./(components)/HomePage/QualificationSection";
import ServiceSection from "./(components)/HomePage/ServiceSection";
import ContactSection from "./(components)/HomePage/ContactSection";
import Footer from "./(components)/Footer";

const Home = () => {
  return (
    <main className="main-bg-linear text-dark">
      {/* navigation */}

      <Navbar />

      <div className="w-full py-6 m-0"></div>

      <div className="full-width">
        {/* hero section */}
        <HeroSection
          Photo={Photo}
          GitHubIcon={GitHubIcon}
          LinkedInIcon={LinkedInIcon}
          FacebookRoundedIcon={FacebookRoundedIcon}
          InstagramIcon={InstagramIcon}
          Link={Link}
        />
        {/* about section */}
        <AboutSection
          Image={Image}
          Bootstrap={Bootstrap}
          CSS={CSS}
          ExpressJs={ExpressJs}
          FastAPI={FastAPI}
          HTML={HTML}
          Javascript={Javascript}
          JQuery={JQuery}
          Laravel={Laravel}
          MySQL={MySQL}
          PHP={PHP}
          ReactJS={ReactJS}
          SequelizeJS={SequelizeJS}
          SocketIO={SocketIO}
          Tailwind={Tailwind}
        />
        {/* projects section */}
        <ProjectSection
          OpenInNewIcon={OpenInNewIcon}
          GitHubIcon={GitHubIcon}
          Image={Image}
          Photo={Photo}
          Link={Link}
        />
        {/* qualifications section */}
        <QualificationSection Link={Link} />

        {/* services section */}
        <ServiceSection
          Image={Image}
          Website={Website}
          Mobile={Mobile}
          Desktop={Desktop}
          Design={Design}
        />
        {/* contacts section */}
        <ContactSection
          NorthEastIcon={NorthEastIcon}
          GitHubIcon={GitHubIcon}
          LinkedInIcon={LinkedInIcon}
          FacebookIcon={FacebookIcon}
          EmailOutlinedIcon={EmailOutlinedIcon}
          CalendarMonthIcon={CalendarMonthIcon}
          Link={Link}
        />
      </div>

      {/* Footer */}
      <Footer Link={Link} />
    </main>
  );
};

export default Home;
