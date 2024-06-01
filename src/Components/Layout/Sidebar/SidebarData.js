const rule = 0


export const superadmin_sidebar = [
  {
    id: 1,
    name: "Super Admin Dashboard",
    Icon: "bx bx-home-heart",
    route: "/super/dashboard",
    Data: [],
  },
  {
    id: 3,
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
    // route: "/super/users",
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

  // {
  //   id: 4,
  //   name: "Game Rules",
  //   Icon: "fa fa-window-restore",
  //   route: "/super/rules",
  //   Data: [],
  // },
  // {
  //   id: 5,
  //   name: "Game",
  //   Icon: "fa fa-gamepad",
  //   route: "/super/game",
  //   Data: [],
  // },
  {
    id: 5,
    name: "Payment Details",
    Icon: "fa fa-credit-card-alt",
    route: "/super/bankdetails",
    Data: [],
  },
  {
    id: 6,
    name: "Credit Request",
    Icon: "fa fa-money",
    route: "/super/paymenthistory?credit",
    Data: [],
  },
  {
    id: 7,
    name: "Withdrawal Request",
    Icon: "fa fa-money",
    route: "/super/paymenthistory?debit",
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
