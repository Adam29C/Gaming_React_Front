import React, { useEffect } from "react";
import { superadmin_sidebar, admin_sidebar } from "./SidebarData";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../Context/CreateContext";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subAdminPermissionGet } from "../../Redux/Slice/Admin/admin.slice";

const Sidebar = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details"))?.id;
  const ROLES = JSON.parse(localStorage.getItem("roles"));
  const { getSubAdminPermissionState } = useSelector(
    (state) => state.AdminSlice
  );
  const dispatch = useDispatch();
  const canViewUser = getSubAdminPermissionState.viewUser && getSubAdminPermissionState.viewUser;
 

  const [ShowSubMenu, setShowSubMenu] = useState(false);

  const { handleMouseLeave, handleMouseEnter } = useAppContext();

  const MouserExit = () => {
    handleMouseLeave();
  };
  const mouseEnter = () => {
    handleMouseEnter();
  };

  const filterAdminSidebar = (admin_sidebar) => {
    return admin_sidebar?.filter((item, index) => {
     if (index === "Admin Dashboard") return true; 
 
      if (item.name === "All Users") {
        return canViewUser;
      }
     return true; 
     });
  };



  let sidebarTabs;
  if (parseInt(ROLES) == 0) {
    sidebarTabs = superadmin_sidebar;
  } else if (parseInt(ROLES) == 1 ) {
    sidebarTabs = filterAdminSidebar(admin_sidebar);
  }

  const getPermission = async () => {
    let data = {
      id: userId,
      token: token,
    };
    dispatch(subAdminPermissionGet(data));
  };

  useEffect(() => {
    parseInt(ROLES) == 1 && getPermission();
  }, []);

  return (
    <>
      <div className="side-menu-area">
        <nav onMouseEnter={mouseEnter} onMouseLeave={MouserExit}>
          <ul className="sidebar-menu tree" data-widget="tree">
            {sidebarTabs &&
              sidebarTabs.map((item , index) => {
                return (
                  <>
                    {item.Data.length === 0 ? (
                      // {canViewUser ? ():""}
                      <li
                        className={
                          location.pathname === item.route ? ` active` : ""

                        }
                        key={item.id}
                      >
                        <Link to={item.route}>
                          <i className={item.Icon} />
                          <span>&nbsp;{item.name}</span>
                        </Link>
                      </li>
                    ) : (
                      <li
                        className={`${ShowSubMenu ? "menu-open" : ""} treeview`}
                        key={index}
                      >
                        <a
                          href="#"
                          onClick={() => setShowSubMenu(!ShowSubMenu)}
                        
                        >
                          <i className={item.Icon} /> &nbsp;
                          <span>{item.name}</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul
                          className={`${
                            ShowSubMenu ? "d-block" : ""
                          } treeview-menu `}
                        >
                          {item.Data.map((subItem) => (
                            <li
                              key={subItem.id}
                              className={
                                location.pathname === subItem.route
                                  ? ` active`
                                  : ""
                              }
                            >
                              <Link to={subItem.route}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </>
                );
              })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
