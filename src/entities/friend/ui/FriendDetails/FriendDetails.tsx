import { Friend } from '@entities/friend';
import { ReactNode } from 'react';
import { Alert } from 'react-bootstrap';

type FriendDetailsProps = {
  data: Friend;
  contentSlot?: ReactNode;
};

export const FriendDetails = ({ data, contentSlot }: FriendDetailsProps) => {
  return (
    <Alert variant="secondary" className="px-5 py-5">
      <Alert.Heading as="h1" className="mb-2">
        {data.name}
      </Alert.Heading>
      <p>{`${data.email} | ${data.phone} | ${data.twitter}`}</p>
      {!!contentSlot && (
        <>
          <hr />
          {contentSlot}
        </>
      )}
    </Alert>
  );
};
