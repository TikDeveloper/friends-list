import { NewFriendForm } from '@features/friend/add';
import { PAGE_PATH } from '@shared/lib/react-router';
import { useNavigate } from 'react-router-dom';

export const NewFriendPage = () => {
  const navigate = useNavigate();

  return <NewFriendForm onComplete={() => navigate(PAGE_PATH.friends.root)} />;
};
