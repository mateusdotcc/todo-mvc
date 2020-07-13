import { NextApiRequest, NextApiResponse } from 'next';

const todos = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log('METHOD', method);

  switch (method) {
    case 'GET':
      console.log(':::GET ', todos);
      res.status(200).json(todos);
      break;

    case 'POST':
      console.log(':::POST', todos);
      // const { todos } = context;
      // mutate('home', todos.push(event.data));
      // mutate('home', event.data);

      // todos.push(event.data);

      console.log('REQ', req);
      console.log('RES', res);

      res.status(200).json(todos);
      break;

    case 'PUT':
      console.log(':::PUT ', req);
      res.status(200).json({ message: 'PUT method' });
      break;

    default:
      console.log('sei lá');
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} not Allowed`);
  }
};
