const ProjectSection = ({
  OpenInNewIcon,
  GitHubIcon,
  Image,
  MindScape,
  Link,
}) => {
  return (
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
          <ul class=" items-center text-center gap-4 hidden">
            <li>
              <Link
                className="text-center font-bold px-2 quicksand text-dark text-sm"
                href={"#about"}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                className="text-center px-2 quicksand text-secondary-dark text-sm"
                href={"#projects"}
              >
                Web
              </Link>
            </li>
            <li>
              <Link
                className="text-center px-2 quicksand text-secondary-dark text-sm"
                href={"#qualifications"}
              >
                Mobile
              </Link>
            </li>
            <li>
              <Link
                className="text-center px-2 quicksand text-secondary-dark text-sm"
                href={"#qualifications"}
              >
                Desktop
              </Link>
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
                    innovative technologies to enhance user qualificationss and
                    foster collaboration among users.
                  </p>

                  <br />
                  <div className="flex items-center gap-3">
                    <button className="w-1/6 text-center bg-primary text-light rounded py-2">
                      <Link
                        href={"https://mindscape-ai.vercel.app"}
                        target="_blank"
                      >
                        <OpenInNewIcon fontSize="small" className="mr-1 mb-1" />
                        Live Site
                      </Link>
                    </button>
                    <button className="w-1/6 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                      <Link
                        href={"https://github.com/jasmininnaka24/mindscape-ai"}
                        target="_blank"
                      >
                        <GitHubIcon fontSize="small" className="mr-1 mb-1" />
                        Github
                      </Link>
                    </button>
                  </div>

                  <h4 className="text-secondary-dark mt-5 opacity-60 text-sm">
                    Date Published: February 16, 2023
                  </h4>
                </div>

                <div className="w-1/3 flex items-center justify-end">
                  <Image
                    src={MindScape}
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
  );
};

export default ProjectSection;
