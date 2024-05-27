import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../Config/Frontend.config";
// import Files
import { header } from "../Config/Header";





//get profile api data

export async function ProfileGet(token) {
  try {
    const res = await axios.get(`${baseurl}authRouter/getUserProfile`, {
      headers: header(token),
    });

    return await res?.data;
  } catch (error) {
    return error;
  }
}


//change password

export async function ChangePasswordApi(data, token) {
  try {
    const res = await axios.post(`${baseurl}authRouter/changePassword`, data, {
      headers: header(token),
    });
    return res;
  } catch (error) {
    return error;
  }
}

//game add



export async function GameAddApi(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}adminRouter/gamesCreatedByAdmin`,
      data,
      {
        headers: header(token),
      }
    );
    return res;
  } catch (error) {
    return error;
  }
}

//game update api

export async function GameUpdateApi(data, token) {
  try {
    const res = await axios.put(
      `${baseurl}adminRouter/gamesUpdatedByAdmin`,
      data,
      {
        headers: header(token),
      }
    );
    return res;
  } catch (error) {
    return error;
  }
}

//game delete api

export async function GameDeleteApi(id, token) {
  try {
    const res = await axios.delete(
      `${baseurl}adminRouter/gameDeletedByAdmin?gameId=${id}`,
      {
        headers: header(token),
      }
    );
    return res;
  } catch (error) {
    return error;
  }
}


//sub admin created by user

export async function SUB_ADMIN_CREATED_USER(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}subAdminRouter/userCreatedBySubAdmin`,data,
      {
        headers: header(token),
      }
    );
    return res;
  } catch (error) {
    return error;
  }
}


//sub admin get api
export async function SUB_ADMIN_GET_LIST(id, token) {
  try {
    const res = await axios.get(
      `${baseurl}subAdminRouter/subAdminUserList?subAdminId=${id}`,
      {
        headers: header(token),
      }
    );
    return res;
  } catch (error) {
    return error;
  }
}




//sub admin delete get api
export async function SUB_ADMIN_DELETE_LIST(data, token) {
  try {
    const res = await axios.request({
      url: `${baseurl}subAdminRouter/deleteSubAdminUser`,
      method: "DELETE",
      headers: header(token),
      data: data,
    });
    return res?.data;
  } catch (error) {
    return error?.response?.data || error;
  }
}


// sub admin permission get api
export async function SUB_ADMIN_PERMISSION_GET_API(id,token) {
  try {
    const res = await axios.get(`${baseurl}subAdminRouter/subAdminPermissions?subAdminId=${id}`, {
      headers: header(token),
    });

    return await res?.data?.data;
  } catch (error) {
    return error;
  }
}
