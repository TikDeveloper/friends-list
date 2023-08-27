import { FormikInput, GoBack } from '@shared/ui';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import {
  type NewFriendFormValues,
  INITIAL_VALUES,
  newFiendFormSchema,
} from '../../model/newFriendForm';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '@shared/model';
import { FriendFormWrapper, addFriend } from '@entities/friend';

type NewFriendFormProps = {
  onComplete?: () => void;
};

export const NewFriendForm = ({ onComplete }: NewFriendFormProps) => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (
      values: NewFriendFormValues,
      helpers: FormikHelpers<NewFriendFormValues>
    ) => {
      dispatch(
        addFriend({
          id: crypto.randomUUID(),
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          twitter: values.twitter,
          createdAt: Date.now(),
        })
      );
      helpers.resetForm();
      helpers.setSubmitting(false);
      onComplete?.();
    },
    [onComplete, dispatch]
  );

  return (
    <FriendFormWrapper
      title="Add New Friend"
      actionsSlot={
        <div className="d-flex gap-2 mt-4">
          <GoBack />
        </div>
      }
    >
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
        validationSchema={newFiendFormSchema}
      >
        {(props: FormikProps<NewFriendFormValues>) => (
          <Form autoComplete="off">
            <FormikInput
              name="firstName"
              placeholder="First Name"
              type="text"
            />
            <FormikInput name="lastName" placeholder="Last Name" type="text" />
            <FormikInput name="email" placeholder="Email" type="email" />
            <FormikInput name="phone" placeholder="Phone" type="phone" />
            <FormikInput name="twitter" placeholder="Twitter" type="text" />
            <Button type="submit" variant="dark" disabled={props.isSubmitting}>
              Create Friend
            </Button>
          </Form>
        )}
      </Formik>
    </FriendFormWrapper>
  );
};
