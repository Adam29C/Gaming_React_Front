  {/* Order Summary */}
  <div className="col-lg-8 col-12 box-margin height-card">
  <div className="card">
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-50">
        <h4 className="card-title mb-0">
          Order{" "}
          <span className="break-320-480-none">
            Summary
          </span>
        </h4>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-primary btn-sm mr-2"
          >
            Month
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
          >
            Week
          </button>
        </div>
      </div>
    </div>
    {/* Order Chart */}
    <div className="card-body p-0">
      <div className="card-content">
        <div id="order-summary-chart" />
      </div>
    </div>
  </div>
</div>

{/* Latest Update Area */}
<div className="col-lg-4 box-margin height-card">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Latest Update</h5>
      <div className="transaction-area">
        <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
          <div className="media d-flex justify-content-center align-items-center">
            <div className="icon-section bg-primary-soft">
              <i className="fa fa-file-code-o" />
            </div>
            <div className="media-body">
              <h6 className="mb-1 font-15">New Users</h6>
              <p className="mb-0 font-13">
                6 June 19, 10:25 AM
              </p>
            </div>
          </div>
          <div className="amount txt-gray-5">
            <p className="mb-0">57,0000</p>
          </div>
        </div>
        <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
          <div className="media d-flex justify-content-center align-items-center">
            <div className="icon-section bg-danger-soft">
              <i className="fa fa-newspaper-o" />
            </div>
            <div className="media-body">
              <h6 className="mb-1 font-15">Page Views</h6>
              <p className="mb-0 font-13">
                9 July 19, 03:43 Pm
              </p>
            </div>
          </div>
          <div className="amount txt-gray-5">
            <p className="mb-0">79,496</p>
          </div>
        </div>
        <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
          <div className="media d-flex justify-content-center align-items-center">
            <div className="icon-section bg-success-soft">
              <i className="fa fa-clone" />
            </div>
            <div className="media-body">
              <h6 className="mb-1 font-15">
                Page Sessions
              </h6>
              <p className="mb-0 font-13">
                6 April 19, 02:34 PM
              </p>
            </div>
          </div>
          <div className="amount txt-gray-5">
            <p className="mb-0">47,381</p>
          </div>
        </div>
        <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
          <div className="media d-flex justify-content-center align-items-center">
            <div className="icon-section bg-danger-soft">
              <i className="icon-wallet" />
            </div>
            <div className="media-body">
              <h6 className="mb-1 font-15">
                Click Through
              </h6>
              <p className="mb-0 font-13">
                22 January 19, 07:21 AM
              </p>
            </div>
          </div>
          <div className="amount txt-gray-5">
            <p className="mb-0">4,76,8294</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Visits Chart Area */}
<div className="col-md-6 col-xl-4 box-margin height-card ">
  <div className="card">
    <div className="card-content">
      <div className="card-body">
        <h4 className="card-title">Visits of 2019</h4>
        <div id="radial-chart" />
        <ul className="list-inline d-flex justify-content-around mb-0">
          <li>
            {" "}
            <i className="fa fa-circle mr-1 text-danger" />
            Target
          </li>
          <li>
            {" "}
            <i className="fa fa-circle text-success mr-1" />
            Mart
          </li>
          <li>
            {" "}
            <i className="fa fa-circle text-primary mr-1" />
            Ebay
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* Notification Area */}
<div className="col-md-6 col-xl-4 box-margin height-card ">
  <div className="card">
    <div className="card-body">
      <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="card-title mb-0">
              Notifications
            </h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <ul
              className="nav nav-tabs nav-tabs-line nav-tabs-line-brand nav-tabs-bold"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#kt_portlet_tabs_1_1_1_content"
                  role="tab"
                  aria-selected="true"
                >
                  Week
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#kt_portlet_tabs_1_1_3_content"
                  role="tab"
                  aria-selected="false"
                >
                  Month
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="kt-portlet__body"
          id="notificationBox"
        >
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="kt_portlet_tabs_1_1_1_content"
              role="tabpanel"
            >
              <div
                className="kt-scroll ps ps--active-y"
                data-scroll="true"
                data-mobile-height={350}
              >
                {/*Begin::Timeline */}
                <div className="xv-timeline">
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--success">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_mail_alt text-primary font-weight-bold" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        02:30 PM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      Xviten created new layout whith tens
                      of new options for Keen Admin panel
                    </a>
                    <div className="xv-timeline__item-info">
                      HTML,CSS,VueJS
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--danger">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_genius font-weight-bold text-danger" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        01:20 AM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      New secyrity alert by Firewall &amp;
                      order to take aktion on User
                      Preferences
                    </a>
                    <div className="xv-timeline__item-info">
                      Security, Fieewall
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--brand">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_gift_alt font-weight-bold text-success" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        Yestardey
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      FlyMore design mock-ups been uploadet
                      by designers Bob, Naomi, Richard
                    </a>
                    <div className="xv-timeline__item-info">
                      PSD, Sketch, AJ
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--danger">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_genius font-weight-bold text-danger" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        01:20 AM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      New secyrity alert by Firewall &amp;
                      order to take aktion on User
                      Preferences
                    </a>
                    <div className="xv-timeline__item-info">
                      Security, Fieewall
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--warning">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_datareport font-weight-bold text-warning" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        Aug 13,2019
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      Meeting with Ken Digital Corp ot
                      Unit14, 3 Edigor Buildings, George
                      Street, Loondon
                      <br />
                      England, BA12FJ
                    </a>
                    <div className="xv-timeline__item-info">
                      Meeting, Customer
                    </div>
                  </div>
                  {/*End::Item */}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="kt_portlet_tabs_1_1_3_content"
              role="tabpanel"
            >
              <div
                className="kt-scroll ps"
                data-scroll="true"
                style={{ height: 420, overflow: "hidden" }}
                data-mobile-height={350}
              >
                {/*Begin::Timeline */}
                <div className="xv-timeline">
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--success">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_mail_alt text-primary font-weight-bold" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        01:30 PM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      Created new layout whith tens of new
                      options for Keen Admin panel
                    </a>
                    <div className="xv-timeline__item-info">
                      Vue,CSS,VueJS
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--danger">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_genius font-weight-bold text-danger" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        01:20 AM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      Secyrity alert by Firewall &amp; order
                      to take aktion on User Preferences
                    </a>
                    <div className="xv-timeline__item-info">
                      Security, Fieewall
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--brand">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_gift_alt font-weight-bold text-success" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        Yestardey
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      FlyMore design mock-ups been uploadet
                      by designers Bob, Naomi, Richard
                    </a>
                    <div className="xv-timeline__item-info">
                      Hadrla, Sketch, AJ
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--danger">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_genius font-weight-bold text-danger" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        01:20 AM
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      New secyrity alert by Firewall &amp;
                      order to take aktion on User
                      Preferences
                    </a>
                    <div className="xv-timeline__item-info">
                      Security, Fieewall
                    </div>
                  </div>
                  {/*End::Item */}
                  {/*Begin::Item */}
                  <div className="xv-timeline__item xv-timeline__item--warning">
                    <div className="xv-timeline__item-section">
                      <div className="xv-timeline__item-section-border">
                        <div className="xv-timeline__item-section-icon">
                          <i className="icon_datareport font-weight-bold text-warning" />
                        </div>
                      </div>
                      <span className="xv-timeline__item-datetime">
                        Aug 15,2019
                      </span>
                    </div>
                    <h6>The new Customer Contact</h6>
                    <a
                      href="#"
                      className="xv-timeline__item-text"
                    >
                      With Xita Digital Corp ot Unit14, 3
                      Edigor Buildings, George Street,
                      Loondon
                      <br /> England, BA12FJ
                    </a>
                    <div className="xv-timeline__item-info">
                      Meeting, Clint
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Calendar Area*/}
<div className="col-lg-6 col-xl-4 box-margin height-card">
  <div className="card">
    <div className="card-body">
      <a href="calendar.html">
        <h4 className="card-title mb-15">
          View full calenar{" "}
          <i className="fa fa-angle-double-right ml-1" />
        </h4>
      </a>
    </div>
    <div className="card-body p-0">
      <div id="calendar2" />
    </div>
  </div>
</div>
{/* Projects of the Month */}
<div className="col-lg-6 col-xl-6 height-card box-margin">
  <div className="card">
    <div className="card-body">
      <h6 className="card-title mb-30">Projects</h6>
      <div className="table-responsive">
        <table className="table table-nowrap table-hover mb-0">
          <thead>
            <tr>
              <th>Project</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jQuery</td>
              <td>07/07/2079</td>
              <td>26/04/2079</td>
              <td>
                <span className="badge text-bg-primary">
                  Released
                </span>
              </td>
              <td>Hilana</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>07/07/2079</td>
              <td>26/04/2079</td>
              <td>
                <span className="badge text-bg-success">
                  Review
                </span>
              </td>
              <td>Henson</td>
            </tr>
            <tr>
              <td>ReactJs</td>
              <td>07/05/2079</td>
              <td>10/09/2079</td>
              <td>
                <span className="badge text-bg-secondary">
                  Pending
                </span>
              </td>
              <td>Jensen</td>
            </tr>
            <tr>
              <td>VueJs</td>
              <td>07/07/2079</td>
              <td>31/11/2079</td>
              <td>
                <span className="badge text-bg-danger">
                  Work in Progress
                </span>
              </td>
              <td>Burton</td>
            </tr>
            <tr>
              <td>Laravel</td>
              <td>07/07/2079</td>
              <td>31/12/2079</td>
              <td>
                <span className="badge text-bg-warning">
                  Coming soon
                </span>
              </td>
              <td>Yaretzi</td>
            </tr>
            <tr>
              <td>NodeJs</td>
              <td>07/07/2079</td>
              <td>31/12/2079</td>
              <td>
                <span className="badge badge-primary">
                  Coming soon
                </span>
              </td>
              <td>Henson</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{/* Support Ticket */}
<div className="col-xl-6 height-card box-margin">
  <div className="card">
    <div className="card-header bg-transparent user-area d-flex align-items-center justify-content-between">
      <h6 className="card-title mb-0">Support Tickets</h6>
      <ul className="nav nav-tabs mb-0" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link show active"
            id="sell-03-tab"
            data-bs-toggle="tab"
            href="#sell-03"
            role="tab"
            aria-controls="sell-03"
            aria-selected="true"
          >
            Today
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link mr-0"
            id="rent-04-tab"
            data-bs-toggle="tab"
            href="#rent-04"
            role="tab"
            aria-controls="rent-04"
            aria-selected="false"
          >
            Week
          </a>
        </li>
      </ul>
    </div>
    {/* Tab */}
    <div className="card-body">
      <div className="tab-content" id="ticketList">
        <div
          className="tab-pane fade active show"
          id="sell-03"
          role="tabpanel"
          aria-labelledby="sell-03-tab"
        >
          <ul className="ticket-data-list">
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar avatar-pending primary-color mr-3">
                  Z
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">
                      Zara Smith
                    </h6>
                    <p className="ticket-time mb-0 font-12">
                      (9:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor amet, consectetur
                    adipisicing elit Nisila Lorem ipsum
                    dolor sit amet, consectetur adipisicing.
                  </p>
                  <span className="badge badge-pill badge-primary">
                    Open
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar bg-info mr-3">
                  A
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">Ajoy Das</h6>
                    <p className="ticket-time mb-0 font-12">
                      (8:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nisi eos recusandae
                    obcaecati repudiandae harum quae.
                  </p>
                  <span className="badge badge-pill text-bg-danger">
                    Closed
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar avatar-online bg-success mr-3">
                  J
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">Jhon Deo</h6>
                    <p className="ticket-time mb-0 font-12">
                      (7:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit Lorem ipsum dolor Lorem
                    ipsum dolor sit amet, consectetur...
                  </p>
                  <span className="badge badge-pill badge-warning">
                    Pending
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Tab 2 */}
        <div
          className="tab-pane fade"
          id="rent-04"
          role="tabpanel"
          aria-labelledby="rent-04-tab"
        >
          <ul className="ticket-data-list">
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar avatar-pending bg-danger mr-3">
                  J
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">Jhon Deo</h6>
                    <p className="ticket-time mb-0 font-12">
                      (9:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor amet, consectetur
                    adipisicing elit Nisila Lorem ipsum
                    dolor sit amet, consectetur adipisicing.
                  </p>
                  <span className="badge badge-pill badge-primary">
                    Open
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar bg-success mr-3">
                  L
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">Lara Jhon</h6>
                    <p className="ticket-time mb-0 font-12">
                      (8:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nisi eos recusandae
                    obcaecati repudiandae harum quae.
                  </p>
                  <span className="badge badge-pill text-bg-danger">
                    Closed
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="avatar-area d-flex">
                <span className="avatar avatar-online primary-color mr-3">
                  J
                </span>
                <div className="avatar-text">
                  <div className="d-flex align-items-center">
                    <h6 className="mr-2 mb-0">Jhon Deo</h6>
                    <p className="ticket-time mb-0 font-12">
                      (7:40 PM)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit Lorem ipsum dolor Lorem
                    ipsum dolor sit amet, consectetur...
                  </p>
                  <span className="badge badge-pill badge-warning">
                    Pending
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Order Summary Area */}
<div className="col-12 box-margin">
  <div className="card">
    <div className="card-body">
      <h6 className="card-title">Order Summary</h6>
      {/* Table */}
      <div className="table-responsive">
        <table className="table table-nowrap">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Order</th>
              <th>Amount</th>
              <th>Client</th>
              <th>Modified</th>
              <th>Taxes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary btn-icon rounded-pill"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-download" />
                  </span>
                  <span className="btn-inner--text">
                    Invoice
                  </span>
                </button>
              </th>
              <td className="order">
                <span className="font-14 mb-0">
                  10/09/2018
                </span>
                <span className="d-block font-13">
                  ABC 00023
                </span>
              </td>
              <td>2569854</td>
              <td>
                <span className="client">Apple Inc</span>
              </td>
              <td>18/11/19</td>
              <td>
                <span className="taxes text-sm mb-0">
                  $1.115,45
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success"
                  >
                    <span className="btn-inner--text">
                      Paid
                    </span>
                  </button>
                  {/* Actions */}
                  <div className="actions ml-3">
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Edit"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Archive"
                    >
                      <i className="fa fa-archive" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary btn-icon rounded-pill"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-download" />
                  </span>
                  <span className="btn-inner--text">
                    Invoice
                  </span>
                </button>
              </th>
              <td className="order">
                <span className="font-14 mb-0">
                  10/09/2018
                </span>
                <span className="d-block font-13">
                  ABC 00023
                </span>
              </td>
              <td>2569854</td>
              <td>
                <span className="client">Apple Inc</span>
              </td>
              <td>12/11/19</td>
              <td>
                <span className="taxes text-sm mb-0">
                  $1.115,45
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-warning"
                  >
                    <span className="btn-inner--text">
                      Pay now
                    </span>
                  </button>
                  {/* Actions */}
                  <div className="actions ml-3">
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Edit"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Archive"
                    >
                      <i className="fa fa-archive" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary btn-icon rounded-pill"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-download" />
                  </span>
                  <span className="btn-inner--text">
                    Invoice
                  </span>
                </button>
              </th>
              <td className="order">
                <span className="font-14 mb-0">
                  10/09/2018
                </span>
                <span className="d-block font-13">
                  ABC 00023
                </span>
              </td>
              <td>2569854</td>
              <td>
                <span className="client">Apple Inc</span>
              </td>
              <td>20/11/19</td>
              <td>
                <span className="taxes text-sm mb-0">
                  $1.115,45
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-danger"
                  >
                    <span className="btn-inner--text">
                      Delayed
                    </span>
                  </button>
                  {/* Actions */}
                  <div className="actions ml-3">
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Edit"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Archive"
                    >
                      <i className="fa fa-archive" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary btn-icon rounded-pill"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-download" />
                  </span>
                  <span className="btn-inner--text">
                    Invoice
                  </span>
                </button>
              </th>
              <td className="order">
                <span className="font-14 mb-0">
                  10/09/2018
                </span>
                <span className="d-block font-13">
                  ABC 00023
                </span>
              </td>
              <td>2569854</td>
              <td>
                <span className="client">Apple Inc</span>
              </td>
              <td>28/11/19</td>
              <td>
                <span className="taxes text-sm mb-0">
                  $1.115,45
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success"
                  >
                    <span className="btn-inner--text">
                      Paid
                    </span>
                  </button>
                  {/* Actions */}
                  <div className="actions ml-3">
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Edit"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Archive"
                    >
                      <i className="fa fa-archive" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary btn-icon rounded-pill"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-download" />
                  </span>
                  <span className="btn-inner--text">
                    Invoice
                  </span>
                </button>
              </th>
              <td className="order">
                <span className="font-14 mb-0">
                  10/09/2018
                </span>
                <span className="d-block font-13">
                  ABC 00023
                </span>
              </td>
              <td>2569854</td>
              <td>
                <span className="client">Apple Inc</span>
              </td>
              <td>29/11/19</td>
              <td>
                <span className="taxes text-sm mb-0">
                  $1.115,45
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success"
                  >
                    <span className="btn-inner--text">
                      Paid
                    </span>
                  </button>
                  {/* Actions */}
                  <div className="actions ml-3">
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Edit"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                    <a
                      href="#"
                      className="action-item mr-2"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Archive"
                    >
                      <i className="fa fa-archive" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>