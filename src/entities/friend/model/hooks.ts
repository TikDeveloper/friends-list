import { useAppSelector } from '@shared/model';
import { useNavigate, useParams } from 'react-router-dom';
import { friendSelector } from '..';
import { useEffect } from 'react';
import { PAGE_PATH } from '@shared/lib/react-router';

export const useGetFriendByParamId = () => {
  const navigate = useNavigate();
  const params = useParams();
  const friend = useAppSelector((state) =>
    friendSelector(state, params.friendId || '')
  );

  useEffect(() => {
    if (!friend) {
      navigate(PAGE_PATH.page404, { replace: true });
    }
  }, [friend, navigate]);

  return {
    friend,
  };
};
