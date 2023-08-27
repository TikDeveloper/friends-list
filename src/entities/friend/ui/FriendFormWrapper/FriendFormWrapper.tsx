import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

type FriendFormWrapperProps = {
  title?: string;
  actionsSlot?: ReactNode;
  children: ReactNode;
};

export const FriendFormWrapper = ({
  title,
  actionsSlot,
  children,
}: FriendFormWrapperProps) => {
  return (
    <Container>
      {title && <h1 className="my-5">{title}</h1>}
      {children}
      {actionsSlot && <div className="my-2">{actionsSlot}</div>}
    </Container>
  );
};
