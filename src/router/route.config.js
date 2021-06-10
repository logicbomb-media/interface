const LanguagesManage = () => import('../components/languages/Manage')
const AdministrationIndex = () => import('../components/admin/Index')
const MetaManage = () => import('../components/meta/Manage')
const PageEditor = () => import('../components/pages/Editor')
const PagesAdmin = () => import('../components/pages/Admin')
const SitesAdmin = () => import('../components/sites/Admin')
const UsersAdmin = () => import('../components/users/Admin')
const RedirectsAdmin = () => import('../components/redirects/Admin')

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
    permissions: 'manage settings',
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
    path: '/devise/pages/',
    name: 'devise-pages-admin',
    components: {
      devise: PagesAdmin,
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
    name: 'devise-sites-admin',
    components: {
      devise: SitesAdmin,
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
  {
    path: '/devise/redirects',
    name: 'devise-redirects-admin',
    components: {
      devise: RedirectsAdmin,
    },
    meta: {
      parentRouteName: 'devise-settings',
    },
  },
]

export default routes
