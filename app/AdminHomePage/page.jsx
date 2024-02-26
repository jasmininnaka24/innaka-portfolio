import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/aboutphoto.png";

// icon imports
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";

const AdminHomePage = () => {
  return (
    <main className="main-bg-linear text-dark ">
      <div className="flex items-start bg-dull-secondary-gray py-5">
        <div className="w-full min-h-[100vh] text-dark bg-white full-width box-shadow-dull rounded">
          {/* navigation */}
          <nav className="">
            <div className=" flex-1 py-3 px-5 flex  items-center justify-end gap-3">
              <div className="flex  items-center gap-1 box-shadow-dull py-2 px-2 rounded text-secondary-dark">
                <NotificationsIcon />
              </div>
              <div className="flex items-center gap-1 box-shadow-dull py-2 px-2 rounded">
                <Image
                  src={Photo}
                  alt=""
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    objectFit: "cover",
                  }}
                  className="w-full rounded-full"
                />
                <div className="flex items-center justify-center">
                  <h3 className="m-0 text-secondary-dark text-sm">Jasmin</h3>
                  <button>
                    <ExpandMoreIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Calendar articles and to-do list */}
          <div
            className="px-5 py-5 full-width"
            style={{ borderTop: "solid 1px #efeded" }}
          >
            <div>
              <p className="font-bold text-primary-dark text-lg quicksand">
                Bookings{" "}
              </p>
              <div
                className="bg-primary font-bold rounded mb-5"
                style={{ height: "3px", width: "2rem" }}
              ></div>

              <article className="p-3 rounded bg-white border-primary text-sm text-secondary-dark opacity-50">
                Nothing to show.
              </article>
            </div>
            <br />
            <div>
              <p className="font-bold text-primary-dark text-lg quicksand ">
                Emails{" "}
              </p>
              <div
                className="bg-primary font-bold rounded mb-5"
                style={{ height: "2px", width: "2rem" }}
              ></div>
              <article className="p-3 rounded bg-white border-primary text-sm text-secondary-dark opacity-50">
                Nothing to show.
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminHomePage;
