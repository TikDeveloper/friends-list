import { FriendDetails, useGetFriendByParamId } from '@entities/friend';
import { PAGE_PATH } from '@shared/lib/react-router';
import { GoBack } from '@shared/ui';
import { Container } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

export const FriendInfo = () => {
  const { friend } = useGetFriendByParamId();

  if (!friend) return <Navigate to={PAGE_PATH.page404} replace />;

  return (
    <Container className="mt-5">
      <FriendDetails
        data={friend}
        contentSlot={
          <div className="d-flex gap-2">
            <GoBack />
            <Link
              to={PAGE_PATH.friends.edit.route(friend.id)}
              className="btn btn-success"
            >
              Edit
            </Link>
          </div>
        }
      />
    </Container>
  );
};
