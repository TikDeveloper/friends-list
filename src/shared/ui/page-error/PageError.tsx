/* eslint-disable @typescript-eslint/no-explicit-any */

import { Alert, Button } from 'react-bootstrap';

type PageErrorProps = {
  error: {
    message: string;
  };
  resetErrorBoundary: (...args: any[]) => void;
};

export const PageError = ({ error, resetErrorBoundary }: PageErrorProps) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{error.message}</p>
      <Button variant="danger" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </Alert>
  );
};
