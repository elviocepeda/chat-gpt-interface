import {
  GET_RESPONSE_SUCCESS,
  GET_RESPONSE_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  SET_AVATAR_SUCCESS,
  SET_AVATAR_FAILED,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_FAILED,
  CONTACT_ME_SUCCESS,
  CONTACT_ME_FAILED,
  RECOVER_PASSWORD_FAILED,
  RECOVER_PASSWORD_SUCCESS,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
} from "../store/actionTypes";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const baseUrl = "https://chat-gpt-api-xoio.onrender.com";

export const userLogin = async (dispatch, form) => {
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(form),
  };
  try {
    const res = await fetch(`${baseUrl}/login`, options);
    const data = await res.json();
    if (!data.error) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      localStorage.setItem("jwt", JSON.stringify(data));
    } else dispatch({ type: LOGIN_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
  return;
};

export const getResponse = async (dispatch, prompt) => {
  console.log(prompt);
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(prompt),
  };
  try {
    const res = await fetch(`${baseUrl}/chat`, options);
    const data = await res.json();
    console.log(data);
    dispatch({ type: GET_RESPONSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_RESPONSE_FAILED, payload: error });
  }
  return;
};

export const getUsers = async (dispatch) => {
  try {
    const res = await fetch(baseUrl, { headers: defaultHeaders });
    const data = await res.json();
    if (!data.error) dispatch({ type: GET_USERS_SUCCESS, payload: data });
    else dispatch({ type: GET_USERS_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error });
  }
  return;
};

export const createUser = async (dispatch, form) => {
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(form),
  };
  try {
    const res = await fetch(`${baseUrl}/register`, options);
    const data = await res.json();
    if (!data.error) dispatch({ type: CREATE_USER_SUCCESS, payload: data.msg });
    else dispatch({ type: CREATE_USER_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILED, payload: error });
  }
  return;
};

export const verifyAccount = async (dispatch, query) => {
  const { key, email } = query;
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(query),
  };
  try {
    const res = await fetch(
      `${baseUrl}/verify-account?key=${key}&email=${email}`,
      options
    );
    const data = await res.json();
    if (!data.error)
      dispatch({ type: VERIFY_ACCOUNT_SUCCESS, payload: data.msg });
    else dispatch({ type: VERIFY_ACCOUNT_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: VERIFY_ACCOUNT_FAILED, payload: error });
  }
  return;
};

export const updateUser = async (dispatch, uuid, data) => {
  const options = {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(`${baseUrl}/${uuid}`, options);
    const data = await res.json();
    if (!data.error) dispatch({ type: UPDATE_USER_SUCCESS, payload: data.msg });
    else dispatch({ type: UPDATE_USER_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILED, payload: error });
  }
  return;
};

export const updateUserPassword = async (dispatch, uuid, form) => {
  const options = {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(form),
  };
  try {
    const res = await fetch(`${baseUrl}/new-password/${uuid}`, options);
    const data = await res.json();
    if (!data.error)
      dispatch({ type: UPDATE_USER_PASSWORD_SUCCESS, payload: data.msg });
    else dispatch({ type: UPDATE_USER_PASSWORD_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: UPDATE_USER_PASSWORD_FAILED, payload: error });
  }
  return;
};

export const forgotPassword = async (dispatch, form) => {
  const options = {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(form),
  };
  try {
    const res = await fetch(`${baseUrl}/forgot-password`, options);
    const data = await res.json();
    if (!data.error)
      dispatch({ type: RECOVER_PASSWORD_SUCCESS, payload: data.msg });
    else dispatch({ type: RECOVER_PASSWORD_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: RECOVER_PASSWORD_FAILED, payload: error });
  }
  return;
};

export const setPassword = async (dispatch, data) => {
  const options = {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(`${baseUrl}/set-password`, options);
    const data = await res.json();
    if (!data.error)
      dispatch({ type: SET_PASSWORD_SUCCESS, payload: data.msg });
    else dispatch({ type: SET_PASSWORD_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: SET_PASSWORD_FAILED, payload: error });
  }
  return;
};

export const deleteUser = async (dispatch, uuid) => {
  const options = {
    method: "DELETE",
    headers: defaultHeaders,
  };
  try {
    const res = await fetch(`${baseUrl}/${uuid}`, options);
    const data = await res.json();
    if (!data.error) dispatch({ type: DELETE_USER_SUCCESS, payload: data.msg });
    else dispatch({ type: DELETE_USER_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILED, payload: error });
  }
  return;
};

export const uploadImage = async (dispatch, uuid, data) => {
  const options = {
    method: "POST",
    body: data,
  };
  try {
    const res = await fetch(`${baseUrl}/set-avatar/${uuid}`, options);
    const data = await res.json();
    if (!data.error) dispatch({ type: SET_AVATAR_SUCCESS, payload: data.msg });
    else dispatch({ type: SET_AVATAR_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: SET_AVATAR_FAILED, payload: error });
  }
  return;
};

export const sendContactMessage = async (dispatch, form) => {
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(form),
  };
  try {
    const res = await fetch(`${baseUrl}/contact-me`, options);
    const data = await res.json();
    if (!data.error) dispatch({ type: CONTACT_ME_SUCCESS, payload: data.msg });
    else dispatch({ type: CONTACT_ME_FAILED, payload: data.msg });
  } catch (error) {
    dispatch({ type: CONTACT_ME_FAILED, payload: error });
  }
  return;
};
