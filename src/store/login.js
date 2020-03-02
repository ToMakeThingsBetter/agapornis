const login = {
  state: {
    SIGNUP_BUTTON: false,
    SHOW_POPOVER: false
  },
  getters: {
    SIGNUP_BUTTON: state => state.SIGNUP_BUTTON,
    SHOW_POPOVER: state => state.SHOW_POPOVER
  },
  mutations: {
    SET_SIGNUP_BUTTON: state => {
      state.SIGNUP_BUTTON = !state.SIGNUP_BUTTON;
    },
    SET_SHOW_POPOVER: (state, value) => {
      state.SHOW_POPOVER = value;
    }
  },
  actions: {}
};

export default login;
