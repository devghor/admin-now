export default {
  // roles
  rolesGet: '/roles',
  rolesPut: (id: any) => `/roles/${id}`,
  rolesPost: '/roles',
  rolesDelete: (id: any) => `/roles/${id}`,
  rolesAssignGet: (id: any) => `/roles/assign/${id}`,

  // auth
  loginPost: '/login',
  registerPost: '/register',
  logoutPost: '/logout',
}
