import React from "react";
import Image from "next/image";

const HeroSection = ({
  Photo,
  GitHubIcon,
  LinkedInIcon,
  FacebookRoundedIcon,
  InstagramIcon,
  Link,
}) => {
  return (
    <section
      id="#"
      style={{ minHeight: "30rem" }}
      className={`py-10 mt-12 gap-8 rounded flex flex-row-reverse items-center justify-center`}
    >
      <article className="w-3/4 flex flex-row-reverse items-center justify-center gap-5">
        <div className="w-1/3 flex items-center justify-start">
          <Image
            src={Photo}
            alt=""
            style={{ width: "20rem", height: "20rem" }}
            className="w-full main-photo rounded-[.3rem]"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl mt-2 text-secondary-dark mb-2">Hey there👋🏼</h4>

          <div className="flex items-cente">
            <div>
              <h4 className="font-bold text-5xl text-primary-dark ">
                I am Jasmin In-naka
              </h4>
              <div className="flex items-center justify-end">
                <div
                  className="bg-primary font-bold rounded"
                  style={{ height: "3px", width: "21.5rem" }}
                ></div>
              </div>
            </div>
          </div>

          <h4 className="text-md mt-8 text-secondary-dark">
            21-year old IT student who builds{" "}
            <span className="bg-secondary-light rounded px-2 py-1 text-dark text-md text-dark">
              Software Applications.
            </span>
          </h4>
          <h4 className="text-md mt-2 text-secondary-dark">
            I embrace minimalism and simplicity, along with the elegance they
            unveil.
          </h4>

          <ul className="flex items-center gap-6 mt-10">
            <li>
              <Link href={"/"}>
                <GitHubIcon className="text-secondary-dark" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <LinkedInIcon className="text-secondary-dark" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FacebookRoundedIcon className="text-secondary-dark" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <InstagramIcon className="text-secondary-dark" />
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
