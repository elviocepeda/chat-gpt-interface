const currentUser = localStorage.getItem("jwt")
  ? JSON.parse(localStorage.getItem("jwt"))
  : null;

export const initialState = {
  theme: false,
  chat: {
    loading: false,
    error: null,
    list: [],
  },
  users: {
    loading: false,
    error: null,
    list: [],
  },
  addUser: { loading: false, error: null, success: null },
  updateUser: { loading: false, error: null, success: null },
  deleteUser: { loading: false, error: null, success: null },
  setAvatar: { loading: false, error: null, success: null },
  login: {
    uuid: currentUser ? currentUser.uuid : null,
    token: currentUser ? currentUser.token : null,
    loading: false,
    error: null,
  },
  verifyUser: { loading: false, error: null, success: null },
  changePassword: { loading: false, error: null, success: null },
  forgotPwd: { loading: false, error: null, success: null },
  setPwd: { loading: false, error: null, success: null },
  contactMe: { loading: false, error: null, success: null },
};
