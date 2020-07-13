import { NextApiRequest, NextApiResponse } from 'next';

interface Todos {
  id: string;
  label: string;
  status: 'pending' | 'completed';
}

const todos: Todos[] = [];

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

      todos.push(req.body);

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
