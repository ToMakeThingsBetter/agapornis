const state = {
  SIGNUP_BUTTON: false,
  SHOW_POPOVER: false
};

const getters = {
  SIGNUP_BUTTON: state => state.SIGNUP_BUTTON,
  SHOW_POPOVER: state => state.SHOW_POPOVER
};

const mutations = {
  SET_SIGNUP_BUTTON: state => {
    state.SIGNUP_BUTTON = !state.SIGNUP_BUTTON;
  },
  SET_SHOW_POPOVER: (state, value) => {
    state.SHOW_POPOVER = value;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
