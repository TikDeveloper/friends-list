import { EditFriendForm } from '@features/friend/edit';
import { PAGE_PATH } from '@shared/lib/react-router';
import { useNavigate } from 'react-router-dom';

export const EditFriendPage = () => {
  const navigate = useNavigate();

  return <EditFriendForm onComplete={() => navigate(PAGE_PATH.friends.root)} />;
};
