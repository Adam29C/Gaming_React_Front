import React from "react";

const Notification = () => {
  return (
    <li className="nav-item dropdown">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="bx bx-bell bx-tada" />
        <span className="active-status" />
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        {/* Top Notifications Area */}
        <div className="top-notifications-area">
          {/* Heading */}
          <div className="notifications-heading">
            <div className="heading-title">
              <h6>Notifications</h6>
            </div>
            <span>11</span>
          </div>
          <div className="notifications-box" id="notificationsBox">
            <a href="#" className="dropdown-item">
              <i className="bx bx-shopping-bag" />
              <div>
                <span>Your order is placed</span>
                <p className="mb-0 font-12">
                  Consectetur adipisicing elit. Ipsa, porro!
                </p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <i className="bx bx-wallet-alt" />
              <div>
                <span>Haslina Obeta</span>
                <p className="mb-0 font-12">
                  Consectetur adipisicing elit. Ipsa, porro!
                </p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <i className="bx bx-dollar-circle" />
              <div>
                <span>Your order is Dollar</span>
                <p className="mb-0 font-12">
                  Consectetur adipisicing elit. Ipsa, porro!
                </p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <i className="bx bx-border-all" />
              <div>
                <span>Your order is placed</span>
                <p className="mb-0 font-12">
                  Consectetur adipisicing elit. Ipsa, porro!
                </p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <i className="bx bx-wallet-alt" />
              <div>
                <span>Haslina Obeta</span>
                <p className="mb-0 font-12">
                  Consectetur adipisicing elit. Ipsa, porro!
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Notification;
