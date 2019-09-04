const state = {
  // 地图的定位对象
  loc: null,
  // 地图的工具对象
  util: null
};

const mutations = {
  SET_LOCATION: (state, loc) => {
    state.loc = loc;
  },
  SET_UTIL: (state, util) => {
    state.util = util;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
