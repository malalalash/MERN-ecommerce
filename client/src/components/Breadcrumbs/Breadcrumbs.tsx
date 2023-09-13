import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const separator = "/";
  return (
    <ul className="flex gap-1 text-sm my-5">
      <li className="text-blue-500 capitalize">
        <Link to={"/"}>home</Link>
      </li>
      <li>{separator}</li>
      {pathnames.map((path, p) => {
        const last = p === pathnames.length - 1;
        const route = `/${pathnames.slice(0, p + 1).join("/")}`;
        return last ? (
          <li className="uppercase" key={p}>
            {path}
          </li>
        ) : (
          <li className="text-blue-500 capitalize" key={p}>
            <Link to={route}>{path}</Link>{" "}
            <span className="text-black">{separator}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
