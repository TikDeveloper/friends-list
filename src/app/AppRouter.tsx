import { MainLayout } from './layouts';
import { PAGE_PATH } from '@shared/lib/react-router';
import { Loadable } from '@shared/ui/loadable';
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const NewFriendPage = Loadable(
  lazy(
    () => import(/* webpackChunkName: "New-Friend-Page" */ '@pages/new-friend')
  )
);

const FriendsPage = Loadable(
  lazy(() => import(/* webpackChunkName: "Friends-Page" */ '@pages/friends'))
);

const ViewFriendPage = Loadable(
  lazy(
    () =>
      import(/* webpackChunkName: "View-Friend-Page" */ '@pages/view-friend')
  )
);
const EditFriendPage = Loadable(
  lazy(
    () =>
      import(/* webpackChunkName: "Edit-Friend-Page" */ '@pages/edit-friend')
  )
);

const FourOrFourPage = Loadable(
  lazy(() => import(/* webpackChunkName: "404-Page" */ '@pages/page-404'))
);

export const AppRouter = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: PAGE_PATH.root,
          element: <Navigate to={PAGE_PATH.friends.root} replace />,
        },
        {
          path: PAGE_PATH.friends.root,
          children: [
            { index: true, element: <FriendsPage /> },
            { path: PAGE_PATH.friends.new, element: <NewFriendPage /> },
            {
              path: PAGE_PATH.friends.preview.path,
              children: [
                { index: true, element: <ViewFriendPage /> },
                {
                  path: PAGE_PATH.friends.edit.path,
                  element: <EditFriendPage />,
                },
              ],
            },
          ],
        },
      ],
    },
    { path: '404', element: <FourOrFourPage /> },
    { path: '*', element: <Navigate to={PAGE_PATH.page404} replace /> },
  ]);
};
