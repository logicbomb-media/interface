const LanguagesManage = () =>
  import(/* webpackChunkName: "devise-languages" */ '../components/languages/Manage');
const AdministrationIndex = () =>
  import(/* webpackChunkName: "devise-administration" */ '../components/admin/Index');
const MetaManage = () => import(/* webpackChunkName: "devise-meta" */ '../components/meta/Manage');
const PageEditor = () =>
  import(/* webpackChunkName: "devise-pages" */ '../components/pages/Editor');
const PageCreate = () =>
  import(/* webpackChunkName: "devise-pages" */ '../components/pages/Create');
const PageSettings = () =>
  import(/* webpackChunkName: "devise-pages" */ '../components/pages/Settings');
const PagesIndex = () =>
  import(/* webpackChunkName: "devise-pages" */ '../components/pages/Index');
const PagesView = () => import(/* webpackChunkName: "devise-pages" */ '../components/pages/View');
const SitesIndex = () =>
  import(/* webpackChunkName: "devise-sites" */ '../components/sites/Index');
const SitesEdit = () => import(/* webpackChunkName: "devise-sites" */ '../components/sites/Edit');
const UsersAdmin = () =>
  import(/* webpackChunkName: "devise-users" */ '../components/users/Admin');
const RedirectsIndex = () =>
  import(/* webpackChunkName: "devise-redirects" */ '../components/redirects/Index');
const RedirectsEdit = () =>
  import(/* webpackChunkName: "devise-redirects" */ '../components/redirects/Edit');

const routes = [
  {
    path: '/devise-settings',
    name: 'devise-settings',
    components: {
      devise: AdministrationIndex,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
    permissions: 'manage settings'
  },
  {
    path: '/devise-models',
    name: 'devise-models',
    components: {
      devise: AdministrationIndex,
    },
    meta: {
      parentRouteName: 'devise-models',
    },
  },
  {
    path: '/devise/pages',
    name: 'devise-pages-index',
    components: {
      devise: PagesIndex,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
    permissions: 'manage pages'
  },
  {
    path: '/devise/pages/create',
    name: 'devise-pages-create',
    components: {
      devise: PageCreate,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/pages/:pageId',
    name: 'devise-pages-view',
    components: {
      devise: PagesView,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/',
    alias: '*',
    name: 'devise-page-editor',
    components: {
      devise: PageEditor,
    },
    meta: {
      parentRouteName: 'devise-page-editor',
    },
  },
  {
    path: '/devise/page/settings',
    name: 'devise-page-settings',
    components: {
      devise: PageSettings,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/settings/languages',
    name: 'devise-languages-manage',
    components: {
      devise: LanguagesManage,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/settings/meta',
    name: 'devise-meta-manage',
    components: {
      devise: MetaManage,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/settings',
    name: 'devise-settings-index',
    components: {
      devise: AdministrationIndex,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/sites',
    name: 'devise-sites-index',
    components: {
      devise: SitesIndex,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/sites/:siteId/edit',
    name: 'devise-sites-edit',
    components: {
      devise: SitesEdit,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/users',
    name: 'devise-users-admin',
    components: {
      devise: UsersAdmin,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  // {
  //   path: '/devise/users/:userId/edit',
  //   name: 'devise-users-edit',
  //   components: {
  //     devise: UsersEdit,
  //   },
  //   meta: {
  //     parentRouteName: 'devise-settings',
  //   },
  //   props: true,
  // },
  {
    path: '/devise/redirects',
    name: 'devise-redirects-index',
    components: {
      devise: RedirectsIndex,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
  {
    path: '/devise/redirects/:redirectId/edit',
    name: 'devise-redirects-edit',
    components: {
      devise: RedirectsEdit,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
    props: true,
  },
];

export default routes;
