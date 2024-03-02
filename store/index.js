export const state = () => ({
  showHeader: false,
});

export const mutations = {
  setHeaderState(state, show) {
    state.showHeader = show;
  },
};

export const getters = {
  getHeaderState(store) {
    return store.showHeader;
  },
};
