// Routes/UserRoutes.ts

import * as UserController from '../Controller/UserCntrl';

export default [
  {
    method: 'POST',
    path: '/signup',
    handler: UserController.createUser,
  },

  {
    method: 'GET',
    path: '/users',
    handler: UserController.getUsers,
  },

  {
    method: 'PUT',
    path: '/update-user/{id}',
    handler: UserController.updateUser,
  },
  {
    method: 'DELETE',
    path: '/delete-user/{id}',
    handler: UserController.deleteUser,
  },

];

