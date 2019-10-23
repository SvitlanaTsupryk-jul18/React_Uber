import { createSelector } from "reselect";

const rootSelector = state => state;

export const selectRestaurntsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }
    const { feedItems, storesMap } = restaurantsListData;
    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);

export const selectRestaurntsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectisLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
