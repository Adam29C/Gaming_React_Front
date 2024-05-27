import React, { useState } from "react";
import axios from "axios";
import { header } from "../Config/Header";
import { baseurl } from "../Config/Frontend.config";
import { useNavigate } from "react-router-dom";

// -----------------------------  THIRD PARTY API ------------------------------

//all match get api
export async function AllMatchesApi(token) {
  try {
    const res = await axios.get(`${baseurl}sports/getAllMatchesList`, {
      headers: header(token),
    });

    return await res?.data;
  } catch (error) {
    return error;
  }
}

//get match list
export async function MatchListApi(id, token) {
  try {
    const res = await axios.get(`${baseurl}sports/getMatchsList/${id}`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//get series list
export async function SeriesListApi(token) {
  try {
    const res = await axios.get(`${baseurl}sports/getSeriesList`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//get match details 
export async function MATCH_DETAILS_API(id,token) {
  try {
    console.log(id,"id")
    console.log(token,"token")
    const res = await axios.get(`${baseurl}sports/matchDetails/${id}`, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// -----------------------------  THIRD PARTY API END ------------------------------

// -----------------------------  USERS API'S  ------------------------------

//user profile get
export async function UserProfileGetApi(id, token) {
  try {
    const res = await axios.get(
      `${baseurl}authRouter/getUserProfile?userId=${id}`,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// Show User Wallet

export async function Withdraw(id, token, navigate) {
  try {
    const res = await axios.get(
      `${baseurl}userRouter/viewWallet?userId=${id}`,
      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (error) {
    if (error?.response?.data?.statusCode === 400) {
      navigate("tokenexpiry", { replace: true });
      return;
    }
    return error;
  }
}

// Add Account Details
export async function AddAccountDetails(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}userRouter/addAccountDetail`,
      data,
      {
        headers: header(token),
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//  Account Details
export async function AccountDetailsList(id, token, navigate) {
  try {
    const res = await axios.get(
      `${baseurl}userRouter/userAccountDetail?userId=${id}`,
      {
        headers: header(token),
      }
    );
    return await res?.data;
  } catch (error) {
    if (error?.response?.data?.statusCode === 400) {
      navigate("tokenexpiry", { replace: true });
      return;
    }
    return error;
  }
}


//  Remove Account Details
export async function RemoveAccountDetails(data, token) {
  try {
    const res = await axios.request({
      url: `${baseurl}userRouter/deleteAccountDetail`,
      method: "DELETE",
      headers: header(token),
      data: data,
    });
    return res?.data;
  } catch (error) {
    return error?.response?.data || error;
  }
}

// Create Withdrawl Password
export async function CreateWithdrawPassword(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}userRouter/generateWithdrawalPassword`,
      data,
      {
        headers: header(token),
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
}

// Create Withdrawl Request
export async function CreateWithdrawRequest(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}userRouter/addAccountDetail`,
      data,
      {
        headers: header(token),
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}
// Create Withdrawl Request
export async function GenerateWithdrawalRequest(data, token) {
  try {
    const res = await axios.post(`${baseurl}userRouter/withdrawPayment`, data, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// Send Otp for Reset Password
export async function SendOtpForResetPassword(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}userRouter/withdrawalPasswordSendOtp`,
      data,
      {
        headers: header(token),
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// Update  Reset Password
export async function UpdateResetPassword(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}userRouter/withdrawalPasswordVerifyOtp`,
      data,
      {
        headers: header(token),
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}


//get payment history
export async function PaymentHistory(data, token) {
try {
    const res = await axios.post(`${baseurl}userRouter/filterPaymentHistory`,data, {
      headers: header(token),
    });
return await res?.data;
  } catch (error) {
    return error;
  }

}