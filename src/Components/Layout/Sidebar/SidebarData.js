

export const superadmin_sidebar = [
  {
    id: 1,
    name: "Super Admin Dashboard",
    Icon: "bx bx-home-heart",
    route: "/super/dashboard",
    Data: [],
  },
  {
    id: 2,
    name: "Admins",
    Icon: " fa fa-user-plus",
    route: "/super/users",
    Data: [],
  },
  {
    id: 3,
    name: "Sign-Up Users",
    Icon: " fa fa-user-plus",
    route: "/super/signupusers",
    Data: [],
  },
  {
    id: 4,
    name: "Games Details",
    Icon: "fa fa-gamepad",
    Data: [
      {
        id: 1,
        name: "Games",
        route: "/super/game",
      },
      {
        id: 2,
        name: "Game Rules",
        route: "/super/rules",
      },
    ],
  },

  {
    id: 5,
    name: "Banking Details",
    Icon: "fa fa-credit-card-alt",
    route: "/super/bankdetails",
    Data: [],
  },
  {
    id: 6,
    name: "All Payment Request",
    Icon: "fa fa-credit-card-alt",
    route: "/super/allpaymentrequest",
    Data: [],
  },
  {
    id: 7,
    name: "Payment Request",
    Icon: "fa fa-money",
    Data: [
      {
        id: 1,
        name: "Credit Request",
        route: "/super/paymenthistory?credit",
      },
      {
        id: 2,
        name: "Withdrawal Request",
        route: "/super/paymenthistory?debit",
      },
    ],
  },
  {
    id: 8,
    name: "All Transactions",
    Icon: "fa fa-money",
    route: "/super/alltransactions",
    Data: [],
  },
];

export const admin_sidebar = [
  {
    id: 1,
    name: "Admin Dashboard",
    Icon: "bx bx-home-heart",
    route: "/admin/dashboard",
    Data: [],
  },
  {
    id: 2,
    name: "All Users",
    Icon: "fa fa-user-plus ",
    route: "/admin/userlist",
    Data: [],
  },
  // {
  //   id: 3,
  //   name: "All Permissions",
  //   Icon: "Vote",
  //   route: "/super/permitions",
  //   Data: [],
  // },
  // {
  //   id: 4,
  //   name: "History",
  //   Icon: "FolderClock",
  //   route: "/super/history",
  //   Data: [],
  // },
  // {
  //   id: 5,
  //   name: "Select Theme",
  //   Icon: "Paintbrush",
  //   route: "/super/selecttheme",
  //   Data: [],
  // },
  // {
  //   id: 6,
  //   name: "Api Create Info",
  //   route: "/super/apicreateinfo",
  //   Icon: "WalletCards",
  //   Data: [],
  // },
  // {
  //   id: 7,
  //   name: "Query-Update",
  //   Icon: "HelpingHand",
  //   route: "/super/query",
  //   Data: [],
  // },
  // {
  //   id: 8,
  //   name: "Support",
  //   Icon: "HelpingHand",
  //   route: "/super/support",
  //   Data: [],
  // },
];
