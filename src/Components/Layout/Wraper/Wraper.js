import React from "react";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import Headers from "../Header/Headers";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { useAppContext } from "../../Context/CreateContext";

const Wraper = () => {
  const { isHovered, SideBarClass, isMenuCollapsed } = useAppContext();

  return (
    <>
      <div
        className={`flapt-page-wrapper ${
          isMenuCollapsed && isHovered
            ? "sidemenu-hover-active"
            : "sidemenu-hover-deactive"
        }  ${isMenuCollapsed ? SideBarClass : ""}`}
      >
        <div className={`flapt-sidemenu-wrapper`}>
          <Logo />
          <div className="flapt-sidenav" id="flaptSideNav">
            <Headers />
          </div>
            <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Wraper;

// import React from "react";
// import Logo from "../Logo/Logo";
// import Sidebar from "../Sidebar/Sidebar";
// import Headers from "../Header/Headers";
// import Footer from "../Footer/Footer";
// import Content from "../Content/Content";
// import { useAppContext } from "../../Context/CreateContext";

// const Wraper = () => {
//   const { isHovered, SideBarClass, isMenuCollapsed } = useAppContext();

//   return (
//     <>
//       <>
//         <div
//           className={`flapt-page-wrapper ${
//             isMenuCollapsed && isHovered
//               ? "sidemenu-hover-active"
//               : "sidemenu-hover-deactive"
//           }  ${isMenuCollapsed ? SideBarClass : ""}`}
//         >
//           <div className={`flapt-sidemenu-wrapper`}>
//             <Logo />
//             <div className="flapt-page-content">
//               <Headers />
//               <div className="flapt-sidenav" id="flaptSideNav">
//               </div>
//                 <Sidebar />
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// };

// export default Wraper;
