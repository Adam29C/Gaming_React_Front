import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../Config/Frontend.config";
// import Files
import { header } from "../Config/Header";

// ALL ANTADMINS
export async function ALL_ADMINS(token) {
  try {
    const res = await axios.post(
      `${baseurl}adminRouter/listOfUserAndSubAdmin`,

      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err;
  }
}

// ALL ANTADMINS
export async function ADD_ADMINS(data, token) {
  try {
    const res = await axios.post(`${baseurl}adminRouter/createSubAdmin`, data, {
      headers: header(token),
    });

    return await res?.data;
  } catch (err) {
    return err;
  }
}

//game rule list status change api
export async function GET_ALL_ADMINS(data, token) {
  try {
    const res = await axios.get(
      `${baseurl}adminRouter/subAdminList?adminId=${data}`,

      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}
//game rule list status change api
export async function REMOVE_ADMINS(data, token) {
 
  try {
    const res = await axios.delete(
      `${baseurl}adminRouter/deleteSubAdmin`,
      data,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// ---------------  Game Rules -------------------------------

//add game rule api
export async function GameRuleAddApi(data, token) {
  try {
    const res = await axios.post(`${baseurl}adminRouter/addRules`, data, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//update rule api
export async function GameRuleUpdateApi(data, token) {
  try {
    const res = await axios.patch(`${baseurl}adminRouter/updateRules`, data, {
      headers: header(token),
    });
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//delete rule api
export async function GameRuleDeleteApi(id, token) {
  try {
    const res = await axios.delete(
      `${baseurl}adminRouter/deleteRules?ruleId=${id}`,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//game rule list status change api
export async function GameRuleListStatus(data, token) {
  try {
    const res = await axios.patch(
      `${baseurl}adminRouter/updateRulesStatus`,
      data,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// add admin account details
export async function ADD_ADMIN_ACCOUNT_DETAILS(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}adminRouter/addAdminAccountDetail`,
      data,
      {
        headers: {
          ...header(token),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

export async function All_ACCOUNT_LIST(data, token) {
  try {
    const res = await axios.get(
      `${baseurl}adminRouter/adminAccountsList?adminId=${data}`,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

// update Bank Details 
export async function UPDATE_ADMIN_ACCOUNT_DETAILS(data, token) {
  try {
    const res = await axios.put(
      `${baseurl}adminRouter/updateAdminAccountDetail`,
      data,
      {
        headers: {
          ...header(token),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}

//delete rule api
// export async function REMOVE_BANK_DETAILS(data, token) {
//   try {
//     const res = await axios.delete(
//       `${baseurl}adminRouter/deleteAdminAccountDetail`,
//       data,
//       { headers: header(token) }
//     );
//     return await res?.data;
//   } catch (error) {
//     return error;
//   }
// }

export async function REMOVE_BANK_DETAILS(data, token) {
  try {
    const res = await axios.request({
      url: `${baseurl}adminRouter/deleteAdminAccountDetail`,
      method: "DELETE",
      headers: header(token),
      data: data,
    });
    return res?.data;
  } catch (error) {
    return error?.response?.data || error;
  }
}

//super admin get dashboard count api 
export async function ADMIN_DASHBOARD_COUNT_API(id, token) {
  try {
    const res = await axios.get(
      `${baseurl}adminRouter/countDashboard?adminId=${id}`,
      { headers: header(token) }
    );
    return await res?.data;
  } catch (error) {
    return error;
  }
}
