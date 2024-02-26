import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed w-full bg-white m-0"
      style={{ boxShadow: "0 2px 5px #e9e4e4", zIndex: 10 }}
    >
      <div className={`flex items-center justify-between full-width py-3`}>
        <h2 className="text-center quicksand py-1 mr-10 font-bold rounded-full text-secondary-dark">
          <a href={"#"} className="font-bold text-3xl text-primary">
            JI
          </a>
        </h2>

        <ul class="flex items-center gap-3 text-center SMN_effect-39">
          <li>
            <a
              className="text-center quicksand link-nav text-dark"
              href={"#about"}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-center quicksand link-nav text-dark"
              href={"#projects"}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-center quicksand link-nav text-dark"
              href={"#qualifications"}
            >
              Qualifications
            </a>
          </li>
          <li>
            <a
              className="text-center quicksand link-nav text-dark"
              href={"#services"}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-center quicksand bg-primary text-light rounded quicksand px-3 link-nav-contact"
              href={"#contacts"}
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
