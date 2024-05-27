import { createSlice, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileGet, SUB_ADMIN_PERMISSION_GET_API } from "../../../Service/admin.service";
import { LOGIN } from "../../../Service/auth.service";

export const profileGetApi = createAsyncThunk(
  "admin/profileGetApi",
  async (token) => {
    try {
      const res = await ProfileGet(token);
      return await res;
    } catch (err) {
      return err;
    }
  }
);

export const subAdminPermissionGet = createAsyncThunk(
  "admin/subAdminPermissionGet",
  async (data) => {
const {id,token}=data
try {
      const res = await SUB_ADMIN_PERMISSION_GET_API(id,token);
      return await res;
    } catch (err) {
      return err;
    }
  }
);


const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState: {
    getProfile: [],
    loginData: {},
    isLogin: false,
    getSubAdminPermissionState:{}

  },

  recuders: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileGetApi.pending, (state, action) => {
        return { ...state, getProfile: [] };
      })
      .addCase(profileGetApi.fulfilled, (state, action) => {
        return { ...state, getProfile: action.payload };
      })
      .addCase(profileGetApi.rejected, (state, action) => {
        return { ...state, getProfile: [] };
      })  .addCase(subAdminPermissionGet.pending, (state, action) => {
        return { ...state, getSubAdminPermissionState: [] };
      })
      .addCase(subAdminPermissionGet.fulfilled, (state, action) => {
        return { ...state, getSubAdminPermissionState: action.payload };
      })
      .addCase(subAdminPermissionGet.rejected, (state, action) => {
        return { ...state, getSubAdminPermissionState: [] };
      })
  },
});

export default AdminSlice;
