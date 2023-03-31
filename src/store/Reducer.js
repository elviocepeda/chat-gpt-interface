import {
  SET_THEME,
  GET_RESPONSE_FAILED,
  GET_USERS_FAILED,
  CREATE_USER_FAILED,
  DELETE_USER_FAILED,
  UPDATE_USER_FAILED,
  SET_AVATAR_FAILED,
  SET_PROMPT,
  SET_PROMPT_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGIN_CLEAN_ERRORS,
  GET_RESPONSE_SUCCESS,
  SET_AVATAR_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  GET_USERS_REQUEST,
  DELETE_USER_REQUEST,
  SET_AVATAR_REQUEST,
  GET_RESPONSE_REQUEST,
  CREATE_USER_CLEAN_ERROR,
  UPDATE_USER_CLEAN_ERROR,
  SET_AVATAR_CLEAN_ERROR,
  DELETE_USER_CLEAN_ERROR,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_FAILED,
  SHOW_PROFILE_TAB,
  CLOSE_PROFILE_TAB,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILED,
  UPDATE_USER_PASSWORD_CLEAN_ERROR,
  CONTACT_ME_REQUEST,
  CONTACT_ME_SUCCESS,
  CONTACT_ME_FAILED,
  CONTACT_ME_CLEAN_ERROR,
  RECOVER_PASSWORD_REQUEST,
  RECOVER_PASSWORD_SUCCESS,
  RECOVER_PASSWORD_FAILED,
  RECOVER_PASSWORD_CLEAN_ERROR,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  SET_PASSWORD_CLEAN_ERROR,
} from "./actionTypes";
import ai from "../assets/robot_avatar.png";

export const Reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME: {
      return { ...state, theme: action.payload };
    }
    case SHOW_PROFILE_TAB: {
      return { ...state, showProfile: true };
    }
    case CLOSE_PROFILE_TAB: {
      return { ...state, showProfile: false };
    }
    case GET_USERS_REQUEST: {
      return { ...state, users: { ...state.users, loading: true } };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: { ...state.users, loading: false, list: action.payload },
      };
    }
    case GET_USERS_FAILED: {
      return { ...state, users: { loading: false, error: action.payload } };
    }
    case CREATE_USER_REQUEST: {
      return { ...state, addUser: { ...state.addUser, loading: true } };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        addUser: {
          ...state.addUser,
          loading: false,
          success: action.payload,
        },
      };
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        addUser: { ...state.addUser, loading: false, error: action.payload },
      };
    }
    case CREATE_USER_CLEAN_ERROR: {
      return {
        ...state,
        addUser: { ...state.addUser, error: null, success: null },
      };
    }
    case VERIFY_ACCOUNT_REQUEST: {
      return { ...state, verifyUser: { ...state.verifyUser, loading: true } };
    }
    case VERIFY_ACCOUNT_SUCCESS: {
      return {
        ...state,
        verifyUser: {
          ...state.verifyUser,
          error: null,
          loading: false,
          success: action.payload,
        },
      };
    }
    case VERIFY_ACCOUNT_FAILED: {
      return {
        ...state,
        verifyUser: {
          ...state.verifyUser,
          loading: false,
          error: action.payload,
          success: null,
        },
      };
    }
    case UPDATE_USER_REQUEST: {
      return { ...state, updateUser: { ...state.updateUser, loading: true } };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUser: {
          ...state.updateUser,
          loading: false,
          success: action.payload,
        },
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUser: { loading: false, error: action.payload },
      };
    }
    case UPDATE_USER_CLEAN_ERROR: {
      return {
        ...state,
        updateUser: { loading: false, error: null, success: null },
      };
    }
    case UPDATE_USER_PASSWORD_REQUEST: {
      return {
        ...state,
        changePassword: { ...state.changePassword, loading: true },
      };
    }
    case UPDATE_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          success: action.payload,
        },
      };
    }
    case UPDATE_USER_PASSWORD_FAILED: {
      return {
        ...state,
        changePassword: { loading: false, error: action.payload },
      };
    }
    case UPDATE_USER_PASSWORD_CLEAN_ERROR: {
      return {
        ...state,
        changePassword: { loading: false, error: null, success: null },
      };
    }
    case DELETE_USER_REQUEST: {
      return { ...state, deleteUser: { ...state.deleteUser, loading: true } };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          success: action.payload,
        },
      };
    }
    case DELETE_USER_FAILED: {
      return {
        ...state,
        deleteUser: { loading: false, error: action.payload },
      };
    }
    case DELETE_USER_CLEAN_ERROR: {
      return {
        ...state,
        deleteUser: { ...state.deleteUser, error: null },
      };
    }
    case SET_AVATAR_REQUEST: {
      return { ...state, setAvatar: { ...state.setAvatar, loading: true } };
    }
    case SET_AVATAR_SUCCESS: {
      return {
        ...state,
        setAvatar: {
          ...state.setAvatar,
          loading: false,
          success: action.payload,
        },
      };
    }
    case SET_AVATAR_FAILED: {
      return { ...state, setAvatar: { loading: false, error: action.payload } };
    }
    case SET_AVATAR_CLEAN_ERROR: {
      return { ...state, setAvatar: { ...state.setAvatar, error: null } };
    }
    case LOGIN_REQUEST: {
      return { ...state, login: { ...state.login, loading: true } };
    }
    case LOGIN_SUCCESS: {
      const { uuid, token } = action.payload;
      return {
        ...state,
        login: {
          ...state.login,
          uuid,
          token,
          loading: false,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        login: { ...state.login, uuid: null, error: action.payload },
      };
    }
    case LOGIN_CLEAN_ERRORS: {
      return {
        ...state,
        login: { ...state.login, error: null },
      };
    }
    case LOGOUT_REQUEST: {
      return { ...state, login: { ...state.login, uuid: null, token: null } };
    }
    case SET_PROMPT: {
      const { avatar, form } = action.payload;
      const item = { success: form.prompt, avatar: avatar, id: Date.now() };
      return {
        ...state,
        chat: { ...state.chat, list: [...state.chat.list, item] },
      };
    }
    case SET_PROMPT_FAILED: {
      return { ...state, chat: { ...state.chat, error: action.payload } };
    }
    case GET_RESPONSE_REQUEST: {
      return { ...state, chat: { ...state.chat, loading: true } };
    }
    case GET_RESPONSE_SUCCESS: {
      const item = { success: action.payload, avatar: ai, id: Date.now() };
      return {
        ...state,
        chat: {
          ...state.chat,
          loading: false,
          list: [...state.chat.list, item],
        },
      };
    }
    case GET_RESPONSE_FAILED: {
      return {
        ...state,
        chat: { ...state.chat, loading: false, error: action.payload },
      };
    }
    case CONTACT_ME_REQUEST: {
      return { ...state, contactMe: { ...state.contactMe, loading: true } };
    }
    case CONTACT_ME_SUCCESS: {
      return {
        ...state,
        contactMe: {
          ...state.contactMe,
          loading: false,
          success: action.payload,
        },
      };
    }
    case CONTACT_ME_FAILED: {
      return {
        ...state,
        contactMe: { loading: false, error: action.payload },
      };
    }
    case CONTACT_ME_CLEAN_ERROR: {
      return {
        ...state,
        contactMe: { ...state.contactMe, error: null, success: null },
      };
    }
    case RECOVER_PASSWORD_REQUEST: {
      return { ...state, forgotPwd: { ...state.forgotPwd, loading: true } };
    }
    case RECOVER_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          loading: false,
          success: action.payload,
        },
      };
    }
    case RECOVER_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPwd: { loading: false, error: action.payload },
      };
    }
    case RECOVER_PASSWORD_CLEAN_ERROR: {
      return {
        ...state,
        forgotPwd: { ...state.forgotPwd, error: null, success: null },
      };
    }
    case SET_PASSWORD_REQUEST: {
      return { ...state, setPwd: { ...state.setPwd, loading: true } };
    }
    case SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        setPwd: {
          ...state.setPwd,
          loading: false,
          success: action.payload,
        },
      };
    }
    case SET_PASSWORD_FAILED: {
      return {
        ...state,
        setPwd: { loading: false, error: action.payload },
      };
    }
    case SET_PASSWORD_CLEAN_ERROR: {
      return {
        ...state,
        setPwd: { ...state.setPwd, error: null, success: null },
      };
    }
    default:
      return state;
  }
};
