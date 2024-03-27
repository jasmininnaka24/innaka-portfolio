const ServiceSection = ({ Image, Website, Mobile, Desktop, Design }) => {
  return (
    <section
      id="services"
      style={{ minHeight: "100vh" }}
      className={`flex items-center py-28 w-full`}
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
                online presence shine. From concept to execution, I bring vision
                to life with personalized seamless functionality.
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
                Bringing your ideas to life with custom mobile app development.
                I develop user-friendly cross-platform mobile applications that
                cater to your unique needs and objectives.
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
                Empowering your business with tailored desktop applications. I
                develop efficient and reliable software solutions that enhance
                productivity and streamline operations on the desktop platform.
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
                with users and enhance their interaction with digital platforms.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ServiceSection;
