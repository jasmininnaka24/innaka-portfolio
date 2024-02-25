"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/image";

// component imports

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

        <section
          id="projects"
          style={{ minHeight: "40rem" }}
          className={`flex py-28 w-full`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-4xl text-primary-dark quicksand ">
                  Featured Projects
                </h4>
                <div className="flex items-center mt-1">
                  <div
                    className="bg-primary font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                </div>
              </div>
              <ul class="flex items-center text-center gap-5">
                <li>
                  <a
                    className="text-center font-bold px-2 quicksand text-dark text-sm"
                    href={"#about"}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="text-center px-2 quicksand text-secondary-dark text-sm"
                    href={"#projects"}
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    className="text-center px-2 quicksand text-secondary-dark text-sm"
                    href={"#qualifications"}
                  >
                    Mobile
                  </a>
                </li>
              </ul>
            </div>
            <br />

            <article className="w-full relative my-2">
              <ul className="grid grid-cols-1 gap-5 w-full">
                <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                  <div className="flex items-center">
                    {/* tools I used */}

                    <div className="w-2/3">
                      <ul className="flex items-center gap-2 mb-5 flex-wrap">
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          ReactJS
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          ExpressJS
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          SequelizeJS
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          TailwindCSS
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          MySQL
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          FastAPI
                        </li>
                        <li
                          className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                          style={{ fontWeight: 600 }}
                        >
                          Socket.io
                        </li>
                      </ul>

                      <h3 className="text-semi-dark font-bold text-2xl mt-1">
                        MindScape AI: Capstone Project
                      </h3>

                      <p className="text-secondary-dark font-medium mt-4 text-justify">
                        🚀 A web application that harnesses advanced
                        functionalities, such as seamless integration with
                        artificial intelligence and real-time communication
                        capabilities through socket.io. This project showcases
                        innovative technologies to enhance user qualificationss
                        and foster collaboration among users.
                      </p>

                      <br />
                      <div className="flex items-center gap-3">
                        <button className="w-1/6 text-center bg-primary text-light rounded py-2">
                          <a
                            href={"https://mindscape-ai.vercel.app"}
                            target="_blank"
                          >
                            <OpenInNewIcon
                              fontSize="small"
                              className="mr-1 mb-1"
                            />
                            Live Site
                          </a>
                        </button>
                        <button className="w-1/6 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                          <a
                            href={
                              "https://github.com/jasmininnaka24/mindscape-ai"
                            }
                            target="_blank"
                          >
                            <GitHubIcon
                              fontSize="small"
                              className="mr-1 mb-1"
                            />
                            Github
                          </a>
                        </button>
                      </div>

                      <h4 className="text-secondary-dark mt-5 opacity-60 text-sm">
                        Year: 2023
                      </h4>
                    </div>

                    <div className="w-1/3 flex items-center justify-end">
                      <Image
                        src={Photo}
                        alt=""
                        style={{ width: "12.5rem", height: "12.5rem" }}
                        className="w-full main-photo rounded-[.3rem]"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* qualifications section */}

        <section
          id="qualifications"
          style={{ minHeight: "40rem" }}
          className={`flex py-28 w-full`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div>
                <h4 className="font-bold text-4xl text-primary-dark quicksand ">
                  Qualifications
                </h4>
                <div className="flex items-center mt-1">
                  <div
                    className="bg-primary font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <ul class="flex items-center text-center gap-5">
              <li>
                <a
                  className="text-center font-bold px-2 quicksand text-dark text-sm"
                  href={"#about"}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="text-center px-2 quicksand text-secondary-dark text-sm"
                  href={"#projects"}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="text-center px-2 quicksand text-secondary-dark text-sm"
                  href={"#projects"}
                >
                  Credentials
                </a>
              </li>
            </ul>

            <article className="w-full relative my-4">
              <div class="timeline-container w-full p-3">
                <ul class="tl">
                  <li style={{ minHeight: "1rem" }}>
                    <div class="item-icon"></div>
                    <div className="w-3/4">
                      <div class="text-semi-dark text-2xl font-bold">
                        Software Developer Intern | Zamboanga City Hall
                      </div>
                      <div class="text-secondary-dark text-md mt-2">
                        Currently learning the technologies they use for
                        development, collaborating with my team members on
                        integration and implementation tasks, debugging some
                        bugs and issues, and supporting project development.
                      </div>
                    </div>
                    <div class="w-1/3 text-end text-md text-secondary-dark">
                      February 22, 2024 - Present
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* services section */}

        <section
          id="services"
          style={{ minHeight: "40rem" }}
          className={`flex py-28 w-full`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div>
                <h4 className="font-bold text-4xl text-primary-dark quicksand ">
                  Services
                </h4>
                <div className="flex items-center mt-1">
                  <div
                    className="bg-primary font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                </div>
              </div>
            </div>

            <article className="w-full relative my-8">
              <ul className="grid grid-cols-2 gap-4">
                <li className="w-full box-shadow-dull rounded p-12 flex flex-col items-center">
                  <Image
                    src={Website}
                    alt=""
                    style={{
                      width: "5rem",
                      height: "5rem",
                      objectFit: "contain",
                    }}
                    className="w-full rounded-[.3rem]"
                  />
                  <p className="mt-6 text-semi-dark text-xl font-bold">
                    WEBSITE / WEB APPLICATION
                  </p>
                  <div
                    className="bg-primary-dark font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                  <p className="text-md text-center text-secondary-dark mt-3">
                    Crafting dynamic websites and web applications to make your
                    online presence shine. From concept to execution, I bring
                    vision to life with personalized seamless functionality.
                  </p>
                </li>
                <li className="w-full box-shadow-dull rounded p-12 flex flex-col items-center">
                  <Image
                    src={Mobile}
                    alt=""
                    style={{
                      width: "5rem",
                      height: "5rem",
                      objectFit: "contain",
                    }}
                    className="w-full rounded-[.3rem]"
                  />
                  <p className="mt-6 text-semi-dark text-xl font-bold">
                    MOBILE APPLICATION
                  </p>
                  <div
                    className="bg-primary-dark font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                  <p className="text-md text-center text-secondary-dark mt-3">
                    Bringing your ideas to life with custom mobile app
                    development. I develop user-friendly cross-platform mobile
                    applications that cater to your unique needs and objectives.
                  </p>
                </li>
                <li className="w-full box-shadow-dull rounded p-12 flex flex-col items-center">
                  <Image
                    src={Desktop}
                    alt=""
                    style={{
                      width: "5rem",
                      height: "5rem",
                      objectFit: "contain",
                    }}
                    className="w-full rounded-[.3rem]"
                  />
                  <p className="mt-6 text-semi-dark text-xl font-bold">
                    DESKTOP APPLICATION
                  </p>
                  <div
                    className="bg-primary-dark font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                  <p className="text-md text-center text-secondary-dark mt-3">
                    Empowering your business with tailored desktop applications.
                    I develop efficient and reliable software solutions that
                    enhance productivity and streamline operations on the
                    desktop platform.
                  </p>
                </li>
                <li className="w-full box-shadow-dull rounded p-12 flex flex-col items-center">
                  <Image
                    src={Design}
                    alt=""
                    style={{
                      width: "5rem",
                      height: "5rem",
                      objectFit: "contain",
                    }}
                    className="w-full rounded-[.3rem]"
                  />
                  <p className="mt-6 text-semi-dark text-xl font-bold">
                    UX/UI DESIGN
                  </p>
                  <div
                    className="bg-primary-dark font-bold rounded"
                    style={{ height: "3px", width: "3rem" }}
                  ></div>
                  <p className="text-md text-center text-secondary-dark mt-3">
                    With a keen eye for intuitive design and a commitment to
                    enhancing usability, I develop UI/UX solutions that resonate
                    with users and enhance their interaction with digital
                    platforms.
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* contacts section */}

        <section
          id="contacts"
          style={{ minHeight: "35rem", zIndex: 5 }}
          className={`py-32 flex items-center justify-center`}
        >
          <div className="flex gap-11 items-center justify-center">
            <article className="w-1/2 relative">
              <div>
                <h4 className="font-bold text-4xl text-primary-dark quicksand ">
                  Get in Touch
                </h4>
                <div
                  className="bg-primary font-bold rounded"
                  style={{ height: "3px", width: "2rem" }}
                ></div>
              </div>
              <br />

              <h4 className="mt-3 text-semi-dark font-bold text-3xl">
                Have a project in mind? Let{"'"}s delve into that.
              </h4>

              <br />

              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
                  <div className="rounded flex gap-2 items-center">
                    <EmailOutlinedIcon
                      fontSize="medium"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <a
                      href={"/"}
                      className="text-sm text-primary-dark quicksand"
                    >
                      jasmininnaka@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
                  <div className="rounded flex gap-2 items-center">
                    <LinkedInIcon fontSize="medium" className="text-primary" />
                  </div>
                  <div>
                    <a
                      href={"/"}
                      className="text-sm text-primary-dark quicksand"
                    >
                      jasmin-in-naka
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
                  <div className="rounded flex gap-2 items-center">
                    <GitHubIcon fontSize="medium" className="text-primary" />
                  </div>
                  <div>
                    <a
                      href={"/"}
                      className="text-sm text-primary-dark quicksand"
                    >
                      jasmininnaka24
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
                  <div className="rounded flex gap-2 items-center">
                    <FacebookIcon fontSize="medium" className="text-primary" />
                  </div>
                  <div>
                    <a
                      href={"/"}
                      className="text-sm text-primary-dark quicksand"
                    >
                      jasmininnaka24
                    </a>
                  </div>
                </li>
              </ul>

              <br />
              <br />
              <div className="relative">
                <a href={"#about"} class="text-sm text-primary-dark">
                  View my Resume <NorthEastIcon style={{ fontSize: "15px" }} />
                </a>
                <div
                  className="bg-primary font-bold rounded"
                  style={{ height: "1px", width: "8rem" }}
                ></div>
              </div>
            </article>

            <article className="w-1/2 relative">
              <div className="box-shadow-dull w-full p-5 rounded">
                <p className="text-xl text-primary-dark quicksand font-bold">
                  Send me a message 🚀
                </p>
                <div
                  className="bg-primary font-bold rounded"
                  style={{ height: "2px", width: "3rem" }}
                ></div>
                <form action="" className="w-full">
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mt-4">
                    <textarea
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Tell me about your project..."
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="mt-2 flex justify-end items-center">
                    <button className="bg-primary text-white py-2 rounded w-1/3 quicksand outline-none">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div
        className="w-full bg-dull-gray m-0 py-5"
        style={{ boxShadow: "0 2px 5px #e9e4e4", zIndex: 10 }}
      >
        <p className="text-sm text-center text-dark quicksand">
          &copy; 2024. Designed and developed by{" "}
          <span className="text-primary quicksand text-sm">Jasmin In-naka</span>{" "}
          | Built with{" "}
          <span className="text-primary quicksand text-sm">NextJS</span> &{" "}
          <span className="text-primary quicksand text-sm">TailwindCSS</span>
        </p>
      </div>
    </main>
  );
};

export default Home;
