// src/routes/index.ts
import { Router } from 'express';
import { v4 } from 'uuid';

const routes = Router();

interface userSet {
  name: string,
  email: string,
  id: string
};

// const user = [];

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    // id:v4(),
    name,
    email,
  };

  return response.json(user)
});

export default routes;
