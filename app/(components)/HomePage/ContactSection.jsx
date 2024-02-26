const ContactSection = ({
  NorthEastIcon,
  GitHubIcon,
  LinkedInIcon,
  EmailOutlinedIcon,
  FacebookIcon,
  CalendarMonthIcon,
  Link,
}) => {
  return (
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
            Have a project in mind? Let{"'"}s delve into that.{" "}
          </h4>

          <br />

          <ul className="grid grid-cols-2 gap-3">
            <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
              <div className="rounded flex gap-2 items-center">
                <EmailOutlinedIcon fontSize="medium" className="text-primary" />
              </div>
              <div>
                <Link href={"/"} className="text-sm text-semi-dark quicksand">
                  jasmininnaka@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
              <div className="rounded flex gap-2 items-center">
                <LinkedInIcon fontSize="medium" className="text-primary" />
              </div>
              <div>
                <Link href={"/"} className="text-sm text-semi-dark quicksand">
                  jasmin-in-naka
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
              <div className="rounded flex gap-2 items-center">
                <GitHubIcon fontSize="medium" className="text-primary" />
              </div>
              <div>
                <Link href={"/"} className="text-sm text-semi-dark quicksand">
                  jasmininnaka24
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded">
              <div className="rounded flex gap-2 items-center">
                <FacebookIcon fontSize="medium" className="text-primary" />
              </div>
              <div>
                <Link href={"/"} className="text-sm text-semi-dark quicksand">
                  jasmininnaka24
                </Link>
              </div>
            </li>
          </ul>

          <br />
          <br />

          <div className="flex items-center gap-5">
            <button className="bg-dull-gray text-dark text-sm px-5 py-2 font-normal rounded">
              Book a meeting{" "}
              <CalendarMonthIcon className="ml-1" fontSize="small" />
            </button>
            <div className="relative">
              <Link href={"#about"} class="text-sm text-dark">
                View my Resume <NorthEastIcon style={{ fontSize: "15px" }} />
              </Link>
              <div
                className="bg-primary-dark font-bold rounded"
                style={{ height: "1px", width: "8rem" }}
              ></div>
            </div>
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
  );
};

export default ContactSection;
