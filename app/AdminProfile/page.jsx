import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/aboutphoto.png";

// icon imports
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

const AdminProfile = () => {
  return (
    <main className="main-bg-linear text-dark ">
      <div className="flex items-start bg-dull-secondary-gray py-5">
        <div className="w-full min-h-[100vh] text-dark bg-white full-width box-shadow-dull rounded">
          {/* navigation */}
          <nav className="flex justify-between items-center py-3 px-5">
            <ul className="flex items-center gap-10">
              <li className="py-1 text-primary-dark font-bold text-sm">
                <Link href="" className="text-lg quicksand font-bold">
                  Profile Details
                </Link>
                <div
                  className="bg-primary rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>
              <li className="py-1 text-secondary-dark text-sm">
                <Link href="" className="text-lg quicksand">
                  Emails & Bookings
                </Link>
                <div
                  className="rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>
              <li className="py-1 text-secondary-dark text-sm">
                <Link href="" className="text-lg quicksand">
                  Portfolio Details
                </Link>
                <div
                  className="rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>
            </ul>
            <div className="flex  items-center justify-end">
              <div className="flex  items-center gap-1  py-2 px-2 rounded text-secondary-dark">
                <NotificationsIcon />
              </div>
              <div className="flex items-center gap-1 text-lg py-1 px-3 rounded text-md bg-dull-gray text-semi-dark quicksand">
                Logout
              </div>
            </div>
          </nav>

          {/* Calendar articles and to-do list */}
          <div
            className="px-5 py-5 full-width flex gap-3"
            style={{ borderTop: "solid 1px #efeded" }}
          >
            <article className="w-2/3">
              <form action="" className="w-full">
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold">
                      Full Name<span className="text-primary font-bold">*</span>
                    </p>
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Full Name"
                      value={"Jasmin In-naka"}
                    />
                  </div>
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold">
                      Email<span className="text-primary font-bold">*</span>
                    </p>
                    <input
                      type="email"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Email"
                      value={"jasmininnaka@gmail.com"}
                    />
                  </div>
                </div>

                <br />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold">
                      Headlines<span className="text-primary font-bold">*</span>
                    </p>

                    <button>
                      <AddIcon />
                    </button>
                  </div>

                  <ul className="grid grid-cols-1">
                    <li className="mb-2 text-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none">
                      {" "}
                      21-year old IT student who builds{" "}
                      <span className="font-bold text-semi-dark">
                        Software Applications
                      </span>
                      .
                    </li>

                    <li className="mb-2 text-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none">
                      {" "}
                      I embrace minimalism and simplicity, along with the
                      elegance they unveil.
                    </li>
                  </ul>
                </div>

                <br />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold">
                      Social Media Account Links
                      <span className="text-primary font-bold">*</span>
                    </p>

                    <button>
                      <AddIcon />
                    </button>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    <li className="mb-2 text-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none">
                      {" "}
                      21-year old IT student who builds{" "}
                      <span className="font-bold text-dark">
                        Software Applications
                      </span>
                      .
                    </li>

                    <li className="mb-2 text-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none">
                      {" "}
                      I embrace minimalism and simplicity, along with the
                      elegance they unveil.
                    </li>
                  </ul>
                </div>

                <div className="mt-2 flex justify-end items-center">
                  <button className="bg-primary text-white py-2 rounded w-1/3 quicksand outline-none">
                    Save
                  </button>
                </div>
              </form>
            </article>

            <article className="w-1/3"></article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminProfile;
