import { NewFriendForm } from '@features/friend/add';
import { PAGE_PATH } from '@shared/lib/react-router';
import { GoBack } from '@shared/ui';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const NewFriend = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="my-5">Add New Friend</h1>
      <NewFriendForm onComplete={() => navigate(PAGE_PATH.friends.root)} />
      <div className="my-2">
        <GoBack />
      </div>
    </Container>
  );
};
