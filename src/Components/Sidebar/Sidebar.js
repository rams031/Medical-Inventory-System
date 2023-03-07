import React from "react";
import { adminRoutes } from "./../../Routes/routes";
import { Link, Outlet, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  const adminRouting = (item, index) => {
    console.log(`item:`, item);
    const navigationPath = () => {
      const pathClass =
        item.path === pathname?.slice(7)
          ? "bg-yellow-500 rounded-md text-white"
          : "bg-yellow-200 rounded-md";

      return (
        <li key={index} className="my-2">
          <Link to={item.path}>
            <div className={pathClass}>
              <div className="flex flex-row items-center cursor-pointer h-10 px-4 rounded-lg hover:bg-antiquewhite hover:rounded-md">
                <span className="ml-3 text-sm tracking-wide   font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        </li>
      );
    };

    return <>{navigationPath()}</>;
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row min-h-screen">
      <div className="basis-56 hidden md:hidden lg:block shadow-xl">
        <div className=" pl-8 pr-5 pt-8">
          <div className="relative">
            <ul className="overflow-y-auto">
              <li className="mb-5">
                <div>
                  <section className="flex justify-center align-center">
                    <figure className="flex relative">
                      <div className="m-auto">
                        <div className="text-xl text-black font-bold">
                          HOSPITAL MANAGEMENT SYSTEM
                        </div>
                      </div>
                    </figure>
                  </section>
                </div>
              </li>
              {adminRoutes.length > 0 && adminRoutes.map(adminRouting)}
            </ul>
          </div>
        </div>
      </div>
      <div className="grow">
        {/* Routes Component */}
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
