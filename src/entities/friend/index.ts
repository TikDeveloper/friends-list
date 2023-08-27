export { type Friend } from './model/types';
export {
  friendSlice,
  clearFriends,
  addFriend,
  removeFriend,
  editFriend,
  friendsSelector,
  friendSelector,
  totalQntFriendsSelector,
} from './model/slice';
export { useGetFriendByParamId } from './model/hooks';

export { tableColumns } from './lib/configs';
export { FriendDetails } from './ui/FriendDetails/FriendDetails';
export { FriendFormWrapper } from './ui/FriendFormWrapper/FriendFormWrapper';
