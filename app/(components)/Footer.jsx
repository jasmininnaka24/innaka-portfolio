const Footer = ({ Link }) => {
  return (
    <div
      className="w-full bg-dull-gray m-0 py-5"
      style={{ boxShadow: "0 2px 5px #e9e4e4", zIndex: 10 }}
    >
      <p className="text-sm text-center text-dark quicksand">
        Built with{" "}
        <span>
          <Link
            href={"https://nextjs.org"}
            className="text-primary-dark font-bold quicksand text-sm"
            target="_blank"
          >
            NextJS
          </Link>
        </span>{" "}
        &{" "}
        <span>
          <Link
            href={"https://tailwindcss.com"}
            className="text-primary-dark font-bold quicksand text-sm"
            target="_blank"
          >
            TailwindCSS
          </Link>
        </span>
        , deployed with{" "}
        <span>
          <Link
            className="text-primary-dark font-bold quicksand text-sm"
            href={"https://vercel.com"}
            target="_blank"
          >
            Vercel
          </Link>
        </span>
        .
      </p>
      <p className="text-sm text-center text-dark quicksand">
        &copy; 2024{" "}
        <span>
          <Link
            href={"/"}
            className="text-primary-dark font-bold quicksand text-sm"
          >
            Jasmin In-naka
          </Link>
        </span>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
