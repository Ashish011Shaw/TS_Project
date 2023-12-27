// Controller/UserController.ts

import { Request, ResponseToolkit } from '@hapi/hapi';
import prisma from '../DB/DbConfig';

export const createUser = async (req: Request, h: ResponseToolkit) => {
  try {
    const { name, email, password } = req.payload as { name: string; email: string; password: string };

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });

    return h.response({ status: 201, msg: "Uesr created", data: user }).code(201);
  } catch (error) {
    console.error(error);
    return h.response('Internal Server Error').code(500);
  }
};

export const getUsers = async (req: Request, h: ResponseToolkit) => {
  try {
    const myUsers = await prisma.users.findMany({});
    return h.response({ status: 200, data: myUsers }).code(201);

  } catch (error) {
    console.log(error);
  }
}

// update a user
export const updateUser = async (req: Request, h: ResponseToolkit) => {
  try {
    const { name, email, password } = req.payload as { name: string; email: string; password: string };
    const { id } = req.params as { id: Number };

    const updatedUser = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
      },
    });

    return h.response({ status: 200, msg: 'User updated', data: updatedUser }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ status: 500, msg: 'Internal Server Error', data: null }).code(500);
  }
};

 // delete a user 
export const deleteUser = async (req: Request, h: ResponseToolkit) => {
  try {
    const { id } = req.params as { id: Number };

    const deletData = await prisma.users.delete({
      where: {
        id: Number(id),
      }
    });

    return h.response({ status: 200, msg: 'User Deleted', data: deletData }).code(200);
  } catch (error) {
    console.log(error);
  }
}
