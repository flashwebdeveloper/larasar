const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Users = () => import('~/pages/users').then(m => m.default || m)
const DataTable = () => import('~/pages/DataTable').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)
// const SettingsApi = () => import('~/pages/settings/api').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },
  { path: '/home', name: 'home', component: Home },
  { path: '/users', name: 'users', component: Users },
  { path: '/DataTable', name: 'DataTable', component: DataTable },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword },
      // { path: 'api', name: 'settings.api', component: SettingsApi }
    ] },

  { path: '*', component: NotFound }
]
