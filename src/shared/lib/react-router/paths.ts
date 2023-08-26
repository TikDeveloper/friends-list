export const PAGE_PATH = {
  root: '/',

  friends: {
    root: '/friends',
    new: '/friends/new',
    preview: {
      path: '/friends/:friendId',
      route: (slug: string) => `/friends/${slug}`,
    },
    edit: {
      path: '/friends/:friendId/edit',
      route: (slug: string) => `/friends/${slug}/edit`,
    },
  },

  page404: '/404',
};
