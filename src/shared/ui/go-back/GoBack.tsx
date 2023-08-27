import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};
