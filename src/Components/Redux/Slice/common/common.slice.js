import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GameRuleGetApi,
  GetGameListApi,
  AVAILABLE_ADMIN_ACCOUNT_DETAILS,
} from "../../../Service/common.service";

export const getGameRule = createAsyncThunk(
  "common/getGameRule",
  async (token) => {
    try {
      const res = await GameRuleGetApi(token);
      return await res;
    } catch (err) {
      return err;
    }
  }
);

export const getGame = createAsyncThunk("common/getGame", async (token) => {
  try {
    const res = await GetGameListApi(token);
    return res;
  } catch (error) {
    return error;
  }
});
export const Available_Admin_Acount_Details = createAsyncThunk(
  "common/accountdetails",
  async (data) => {
    const { userId, token } = data;
    try {
      const res = await AVAILABLE_ADMIN_ACCOUNT_DETAILS(userId ,token);
      return res?.data;
    } catch (error) {
      return error;
    }
  }
);

const CommonSlice = createSlice({
  name: "CommonSlice",
  initialState: {
    getGameRuleState: [],
    getGameListState: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameRule.pending, (state, action) => {
        return {
          ...state,
          getGameRuleState: [],
          account_details: [],
          isLoading: true,
        };
      })
      .addCase(getGameRule.fulfilled, (state, action) => {
        return {
          ...state,
          getGameRuleState: action.payload,
          isLoading: false,
        };
      })
      .addCase(getGameRule.rejected, (state, action) => {
        return {
          ...state,
          getGameRuleState: [],
          isLoading: false,
        };
      })
      .addCase(getGame.pending, (state, action) => {
        return {
          ...state,
          getGameListState: [],
          isLoading: true,
        };
      })
      .addCase(getGame.fulfilled, (state, action) => {
        return {
          ...state,
          getGameListState: action.payload,
          isLoading: false,
        };
      })
      .addCase(getGame.rejected, (state, action) => {
        return {
          ...state,
          getGameListState: [],
          isLoading: false,
        };
      })
      .addCase(Available_Admin_Acount_Details.pending, (state, action) => {
        return {
          ...state,
          account_details: [],
          isLoading: true,
        };
      })
      .addCase(Available_Admin_Acount_Details.fulfilled, (state, action) => {
        return {
          ...state,
          account_details: action.payload,
          isLoading: false,
        };
      })
      .addCase(Available_Admin_Acount_Details.rejected, (state, action) => {
        return {
          ...state,
          account_details: [],
          isLoading: false,
        };
      });
  },
});

export default CommonSlice;
