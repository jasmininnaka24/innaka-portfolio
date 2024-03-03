const AboutSection = ({
  Image,
  Bootstrap,
  CSS,
  ExpressJs,
  FastAPI,
  HTML,
  Javascript,
  JQuery,
  Laravel,
  MySQL,
  PHP,
  ReactJS,
  SequelizeJS,
  SocketIO,
  Tailwind,
  Link,
  OpenInNewIcon,
}) => {
  return (
    <section
      id="about"
      style={{ minHeight: "35rem", zIndex: 5 }}
      className={`py-32 flex`}
    >
      <div className="flex gap-11">
        <article className="w-1/2 relative">
          <div>
            <h4 className="font-bold text-4xl text-primary-dark quicksand ">
              About Me
            </h4>
            <div
              className="bg-primary font-bold rounded"
              style={{ height: "3px", width: "2rem" }}
            ></div>
          </div>
          <br />

          <h4 className="font-normal mt-3 text-secondary-dark">
            I{"'"}m a{" "}
            <span className="rounded py-1 bg-secondary-light px-2 text-dark">
              Software Developer.
            </span>{" "}
            Currently practicing{" "}
            <span className="rounded py-1 bg-secondary-light px-2 text-dark">
              UX/UI Design.
            </span>
          </h4>

          <h4 className="font-normal text-secondary-dark mt-5 text-justify">
            Productive coding at night till midnight. I love coffee, cats, and
            rainy season. I like learning new technologies, mostly right after a
            certain project is finished, grasping other tech stack concepts, as
            well, intrigues me even more.
          </h4>
          <h4 className="font-normal text-secondary-dark mt-5 text-justify">
            I enjoy solving logical puzzles, and games like sudoku, chess, and
            rubiks cube. I find it interesting analyzing logics because I think
            a lot. Doing it just makes me apply effective solutions in
            real-world problems.
          </h4>
          <br />

          <div className="flex items-center gap-2 mt-5">
            <Link
              href="https://jasmininnaka-resume.tiiny.site"
              className="text-center w-1/3 py-2 bg-primary text-light rounded quicksand"
              target="_blank"
            >
              View Resume <OpenInNewIcon />
            </Link>
            {/* <button className="w-1/3 py-2 outlined-primary rounded quicksand">
              Download Resume
            </button> */}
          </div>
        </article>

        <article className="w-1/2 relative">
          <div>
            <h4 className="font-bold text-4xl text-primary-dark quicksand ">
              Technologies I Use
            </h4>
            <div
              className="bg-primary font-bold rounded"
              style={{ height: "3px", width: "2rem" }}
            ></div>
          </div>
          <br />

          <ul className="grid grid-cols-6 gap-3 mt-4">
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={Bootstrap}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={CSS}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={ExpressJs}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={FastAPI}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={HTML}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={Javascript}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={JQuery}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={Laravel}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={MySQL}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={PHP}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={ReactJS}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={SequelizeJS}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={SocketIO}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
            <li
              className="box-shadow-dull rounded"
              style={{ height: "4.2rem" }}
            >
              <Image
                src={Tailwind}
                alt=""
                style={{ height: "4.2rem" }}
                className="w-full p-3 cover object-contain rounded"
              />
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
