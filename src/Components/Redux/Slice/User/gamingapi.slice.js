import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AllMatchesApi,
  MATCH_DETAILS_API,
  MatchListApi,
  SeriesListApi,
} from "../../../Service/user.service";
// import { useNavigate } from "react-router-dom";

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
      throw error;
    }
  }
);

//get match details
export const getMatchDetails = createAsyncThunk(
  "user/getMatchDetails",
  async (data) => {
    try {
      let { id, token } = data;
      const res = await MATCH_DETAILS_API(id, token);
      return await res;
    } catch (error) {
      return error;
    }
  }
);


const GamingSlice = createSlice({
  name: "GamingSlice",
  initialState: {
    getAllMatchListState: [],
    getMatchListState: [],
    isLoading: false,
    getMatchDetailsState: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMatches.pending, (state, action) => {
        state.getAllMatchListState = [];
        state.isLoading = true;
      })
      .addCase(getAllMatches.fulfilled, (state, action) => {
        state.getAllMatchListState = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllMatches.rejected, (state, action) => {
        state.getAllMatchListState = [];
        state.isLoading = false;
      })
      .addCase(getMatchList.fulfilled, (state, action) => {
        state.getMatchListState = action.payload;
      })
      .addCase(getSeriesList.fulfilled, (state, action) => {
        state.getSeriesListState = action.payload;
      })
      .addCase(getMatchDetails.pending, (state, action) => {
        return { ...state, getMatchDetailsState: [], isLoading: true };
      })
      .addCase(getMatchDetails.fulfilled, (state, action) => {
        return {
          ...state,
          getMatchDetailsState: action.payload,
          isLoading: false,
        };
      })
      .addCase(getMatchDetails.rejected, (state, action) => {
        return { ...state, getMatchDetailsState: [], isLoading: false };
      });
  },
});

export default GamingSlice;
