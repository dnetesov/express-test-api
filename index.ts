import express, { Request, Response } from 'express';

const app = express();

interface User {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', age: 30, occupation: 'Web Developer' },
  { id: 2, name: 'Jane Smith', age: 25, occupation: 'Software Engineer' },
  { id: 3, name: 'Bob Johnson', age: 40, occupation: 'Data Scientist' }
];

app.get('/api/users', (req: Request, res: Response) => {
  res.status(200).json(users);
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.status(200).json(user);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});