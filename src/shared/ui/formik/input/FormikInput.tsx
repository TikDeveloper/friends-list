import { useField } from 'formik';
import { Form, FormControlProps } from 'react-bootstrap';

type FormikInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
} & FormControlProps;

export const FormikInput = ({
  name,
  label,
  type = 'text',
  placeholder,
}: FormikInputProps) => {
  const [field, meta] = useField(name);

  const isInvalid = meta.touched && !!meta.error;
  const isValid = meta.touched && !meta.error;

  return (
    <Form.Group className="mb-3">
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control
        as="input"
        type={type}
        id={name}
        placeholder={placeholder}
        isInvalid={isInvalid}
        isValid={isValid}
        {...field}
      />

      {isInvalid ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ) : null}
    </Form.Group>
  );
};
