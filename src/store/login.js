const login = {
  state: {
    SIGNUP_BUTTON: false
  },
  getters: {
    SIGNUP_BUTTON: state => state.SIGNUP_BUTTON
  },
  mutations: {
    SET_SIGNUP_BUTTON: state => {
      state.SIGNUP_BUTTON = !state.SIGNUP_BUTTON;
    }
  },
  actions: {}
};

export default login;
