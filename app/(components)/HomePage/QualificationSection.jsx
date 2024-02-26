const QualificationSection = ({ Link }) => {
  return (
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
            <Link
              className="text-center font-bold px-2 quicksand text-dark text-sm"
              href={"#about"}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="text-center px-2 quicksand text-secondary-dark text-sm"
              href={"#projects"}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="text-center px-2 quicksand text-secondary-dark text-sm"
              href={"#projects"}
            >
              Credentials
            </Link>
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
                    integration and implementation tasks, debugging some bugs
                    and issues, and supporting project development.
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
  );
};

export default QualificationSection;
