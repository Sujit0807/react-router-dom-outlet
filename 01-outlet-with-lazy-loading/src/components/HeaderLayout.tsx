import { FC, ReactNode, Suspense } from "react";
import Loader from "./Loader";
import { Link, Outlet } from "react-router-dom";

type THeaderLayout = {
  children?: ReactNode;
  headerName: string;
};

const HeaderLayout: FC<THeaderLayout> = ({ children, headerName }) => {
  return (
    <div>
      <div className="w-full bg-slate-800 text-white py-5 px-20">
        <Link to={"/"} className="hover:text-cyan-400">
          {headerName || "Dashboard"}
        </Link>
      </div>
      {/* Children of header layout */}
      {children && <div>{children}</div>}

      {/* Coming outlet component */}
      <Suspense fallback={<Loader />}>
        <div className="px-20">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default HeaderLayout;
