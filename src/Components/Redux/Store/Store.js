import { configureStore } from "@reduxjs/toolkit";

import AdminSlice from "../Slice/Admin/admin.slice";
import UserSlice from "../Slice/User/user.slice";
import GamingSlice from "../Slice/User/gamingapi.slice";
import CommonSlice from "../Slice/common/common.slice";

//AUTH SLICE
import AuthSlice from "../Slice/Auth/auth.slice";

const store = configureStore({
  reducer: {
    AuthSlice: AuthSlice.reducer,
    AdminSlice: AdminSlice.reducer,
    UserSlice : UserSlice.reducer,
    CommonSlice:CommonSlice.reducer,
    GamingSlice:GamingSlice.reducer
  },
});

export default store;
