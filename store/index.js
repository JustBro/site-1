export const state = () => ({
  showHeader: false,
  expandUpcoming: false,
});

// this.$store.commit("setHeaderState", true);
export const mutations = {
  setHeaderState(state, show) {
    state.showHeader = show;
  },
  setUpcomingState(state, show) {
    state.expandUpcoming = show;
  },
};

// this.$store.getters.getUpcomingState
export const getters = {
  getUpcomingState(store) {
    return store.showHeader;
  },
  getUpcomingState(store) {
    return store.expandUpcoming;
  },
};
