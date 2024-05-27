import axios from "axios";
import { baseurl } from "../Config/Frontend.config";
// import Files
import { header } from "../Config/Header";


// GENERATE TOKEN
export async function GENERATE_TOKEN(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}authRouter/generateAuthToken`,
      data,
      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err;
  }
}

// LOGINS
export async function LOGIN(data, token) {
  try {
    const res = await axios.post(`${baseurl}authRouter/login`, data, {
      headers: header(token),
    });

    return await res?.data;
  } catch (err) {
    return err;
  }
}

// SIGN UP
export async function SIGN_UP(data, token) {
  try {
    const res = await axios.post(`${baseurl}authRouter/sighUp`, data, {
      headers: header(token),
    });

    return await res?.data;
  } catch (err) {
    return err.response;
  }
}
// SEND OTP
export async function SEND_OTP(data, token) {



  try {
    const res = await axios.post(`${baseurl}authRouter/resendOtp`, data, {
      headers: header(token),
    });

    return await res?.data;
  } catch (err) {
    return err.response;
  }
}
// SEND OTP
export async function VERIFY_OTP(data, token) {
  try {
    const res = await axios.post(`${baseurl}authRouter/otpVerify`, data, {
      headers: header(token),
    });

    return await res?.data;
  } catch (err) {
    return err.response;
  }
}

// FORGET PASSWORD LINK
export async function FORGET_PASSWORD_LINK(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}authRouter/forgetPasswordSendOtp`,
      data,
      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err.response;
  }
}

// VERIFY FORGET PASSWORD OPT
export async function VERFY_FORGET_PASSWORD_LINK(data, token) {
  try {
    const res = await axios.post(
      `${baseurl}authRouter/forgetPasswordFn`,
      data,
      {
        headers: header(token),
      }
    );

    return await res?.data;
  } catch (err) {
    return err.response;
  }
}
