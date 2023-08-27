import { FormikInput, GoBack } from '@shared/ui';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import {
  type EditFriendFormValues,
  editFiendFormSchema,
} from '../../model/editFriendForm';
import { useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '@shared/model';
import {
  FriendFormWrapper,
  editFriend,
  useGetFriendByParamId,
} from '@entities/friend';
import { RemoveFriendBtn } from '@features/friend/remove';
import { Link } from 'react-router-dom';
import { PAGE_PATH } from '@shared/lib/react-router';

type EditFriendFormProps = {
  onComplete?: () => void;
};

export const EditFriendForm = ({ onComplete }: EditFriendFormProps) => {
  const dispatch = useAppDispatch();
  const { friend } = useGetFriendByParamId();

  const initialValues = useMemo(() => {
    if (!friend)
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        twitter: '',
      };
    const [firstName, lastName] = friend.name.split(' ');
    return {
      firstName,
      lastName,
      email: friend.email,
      phone: friend.phone,
      twitter: friend.twitter,
    };
  }, [friend]);

  const onSubmit = useCallback(
    (
      values: EditFriendFormValues,
      helpers: FormikHelpers<EditFriendFormValues>
    ) => {
      if (!friend?.id) return;
      dispatch(
        editFriend({
          id: friend.id,
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          twitter: values.twitter,
          createdAt: Date.now(),
        })
      );
      helpers.setSubmitting(false);
      onComplete?.();
    },
    [onComplete, dispatch, friend?.id]
  );

  return (
    <FriendFormWrapper
      title="Editing Friend"
      actionsSlot={
        <div className="d-flex gap-2 mt-4">
          <GoBack />

          {friend && (
            <>
              <Link
                to={PAGE_PATH.friends.preview.route(friend.id)}
                className="btn btn-secondary"
              >
                Show
              </Link>
              <RemoveFriendBtn friend={friend} />
            </>
          )}
        </div>
      }
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={editFiendFormSchema}
      >
        {(props: FormikProps<EditFriendFormValues>) => (
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
              Update Friend
            </Button>
          </Form>
        )}
      </Formik>
    </FriendFormWrapper>
  );
};
