import { Friend, removeFriend } from '@entities/friend';
import { PAGE_PATH } from '@shared/lib/react-router';
import { useAppDispatch } from '@shared/model';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type RemoveFriendBtnProps = {
  friend: Friend;
};

export const RemoveFriendBtn = ({ friend }: RemoveFriendBtnProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onRemove = useCallback(() => {
    const ok = window.confirm('Are you sure?');
    if (ok) {
      dispatch(removeFriend({ id: friend.id }));
      navigate(PAGE_PATH.friends.root);
    }
  }, [friend, dispatch, navigate]);

  return (
    <Button variant="danger" onClick={onRemove}>
      Remove
    </Button>
  );
};
