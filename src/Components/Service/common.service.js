//get game rule api

import axios from "axios";
import toast from "react-hot-toast";
import { baseurl } from "../Config/Frontend.config";
import { header } from "../Config/Header";

//get game rule api
export async function GameRuleGetApi(token) {
  try {
    const res = await axios.get(`${baseurl}common/getRules`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//get game list api
export async function GetGameListApi(token) {
  try {
    const res = await axios.get(`${baseurl}common/gamesList`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}
