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


//game status update api
export async function GAME_STATUS_UPDATE_API(data,token){
  try {
    const res = await axios.patch(`${baseurl}adminRouter/updateGameStatus`,data,{headers:header(token)})
    return res?.data
  } catch (error) {
    return error
  }
}


// ----------------------------------------  SHOW ADMIN ACCOUNT DETAILS  -------------
//get payment history
export async function AVAILABLE_ADMIN_ACCOUNT_DETAILS(data, token) {
  try {
    const res = await axios.get(`${baseurl}userRouter/adminAccountsList?userId=${data}`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}


//get payment history by id 
export async function AVAILABLE_ADMIN_ACCOUNT_DETAILS_BY_ID(data, token) {
  
  try {
    const res = await axios.post(`${baseurl}userRouter/accountById`,data, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//add credit api in payment history
export async function ADMIN_ACCOUNT_ADD_CREDIT_REQUEST(data, token) {
  
  try {
    const res = await axios.post(`${baseurl}userRouter/addCreditRequest`,data, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}
