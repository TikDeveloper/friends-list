import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { Friend } from './types';
import { RootState } from '@app/store';

type FriendSliceState = {
  itemsMap: Record<string, Friend>;
};

const initialState: FriendSliceState = {
  itemsMap: {},
};

export const friendSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    clearFriends: (state) => {
      state.itemsMap = {};
    },
    addFriend: (state, action: PayloadAction<Friend>) => {
      state.itemsMap[action.payload.id] = action.payload;
    },
    removeFriend: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.itemsMap[action.payload.id]) return;
      delete state.itemsMap[action.payload.id];
    },
    editFriend: (
      state,
      action: PayloadAction<
        Partial<Friend> & {
          id: string;
        }
      >
    ) => {
      const friend = state.itemsMap[action.payload.id];
      if (!friend) return;
      state.itemsMap[action.payload.id] = { ...friend, ...action.payload };
    },
  },
});

const friendsMap = (state: RootState) => state.friends.itemsMap;

export const friendsSelector = createSelector(
  [friendsMap],
  (friendsMap) => friendsMap
);

export const totalQntFriendsSelector = createSelector(
  [friendsMap],
  (friendsMap) => Object.keys(friendsMap).length
);

export const friendSelector = createSelector(
  [friendsSelector, (_: RootState, friendId: string) => friendId],
  (friendsMap, friendId) => {
    const found = friendsMap[friendId];
    if (!found) return null;
    return found;
  }
);

export const { clearFriends, addFriend, removeFriend, editFriend } =
  friendSlice.actions;
