// J'ai utilisé faker pour générer des Randoms Users je n'ai donc pas un id mais un uuid 

const express = require('express');
const app = express();

const faker = require('faker');

const generateRandomUsers = (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
   
    };

    users.push(user);
  }

  return users;
};


const users = generateRandomUsers(10);

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
  
    
    const user = users.find((user) => user.id === id);
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Not Found' });
    }
  });
  
const port = 3001; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
