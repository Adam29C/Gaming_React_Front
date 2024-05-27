import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AllMatchesApi,
  MATCH_DETAILS_API,
  MatchListApi,
  PaymentHistory,
  SeriesListApi,
  UserProfileGetApi,
} from "../../../Service/user.service";
// import { useNavigate } from "react-router-dom";

export const getUserProfile = createAsyncThunk(
  "User/getUserProfile",
  async (data) => {
    try {
      let { id, token } = data;
      const res = await UserProfileGetApi(id, token);
      return await res;
    } catch (error) {}
  }
);

export const getAllMatches = createAsyncThunk(
  "user/getAllMatches",
  async (token) => {
    try {
      const res = await AllMatchesApi(token);

      return await res;
    } catch (error) {
      return error;
    }
  }
);

export const getMatchList = createAsyncThunk(
  "user/getMatchList",
  async (data) => {
    try {
      let { id, token } = data;
      const res = await MatchListApi(id, token);
      return await res;
    } catch (error) {
      return error;
    }
  }
);

export const getSeriesList = createAsyncThunk(
  "user/getSeriesList",
  async (token) => {
    // const navigate = useNavigate();

    try {
      const res = await SeriesListApi(token);

      return res;
    } catch (error) {
      console.log("error", error);

      // if (error.response && error.response.status === 500) {
      //   navigate("/login"); // Replace '/error500' with your desired route
      // }

      throw error; // Rethrow the error to let Redux Toolkit know that the action has failed
    }
  }
);


// user get payment history
export const getPaymentHistory = createAsyncThunk(
  "user/getPaymentHistory",
  async (data) => {
    try {
      let { userId, token ,paymentstatus } = data;
      let getData = {
        userId :userId ,
        paymentstatus:paymentstatus
      }
   
      const res = await PaymentHistory(getData, token)
      return await res
    } catch (error) {
      return error;
    }
  }
);

//get match details 
export const getMatchDetails = createAsyncThunk(
  "user/getMatchDetails",
  async (data) => {
    try {
      console.log(data)
      let { id,token } = data;
      // let getData = {
      //   userId :userId ,
      //   paymentstatus:paymentstatus
      // }
   
      const res = await MATCH_DETAILS_API(id, token)
      return await res
    } catch (error) {
      return error;
    }
  }
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    getUserProfileState: {},
    getAllMatchListState: [],
    getMatchListState: [],
    getPaymentHistorytState: {},
    isLoading: false,
    getMatchDetailsState:{}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.getUserProfileState = action.payload;
      })
      .addCase(getAllMatches.fulfilled, (state, action) => {
        state.getAllMatchListState = action.payload;
      })
      .addCase(getMatchList.fulfilled, (state, action) => {
        state.getMatchListState = action.payload;
      })
      .addCase(getSeriesList.fulfilled, (state, action) => {
        state.getSeriesListState = action.payload;
      })
      .addCase(getPaymentHistory.pending, (state, action) => {
        state.getPaymentHistorytState = [];
        state.isLoading = true;
      })
      .addCase(getPaymentHistory.fulfilled, (state, action) => {
        state.getPaymentHistorytState = action.payload;
        state.isLoading = false;
      })
      .addCase(getPaymentHistory.rejected, (state, action) => {
        state.getPaymentHistorytState = [];
        state.isLoading = false;
      })
      .addCase(getMatchDetails.pending, (state, action) => {
        return { ...state, getMatchDetailsState: [], isLoading: true };
      })
      .addCase(getMatchDetails.fulfilled, (state, action) => {
        return { ...state, getMatchDetailsState: action.payload, isLoading: false };
      })
      .addCase(getMatchDetails.rejected, (state, action) => {
        return { ...state, getMatchDetailsState: [], isLoading: false };
      })
  },
});

export default UserSlice;
