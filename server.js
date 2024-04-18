const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/db.json');
const db = router.db;
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const cors = require('cors');

// Configuration de CORS
const corsOptions = {
  origin: true, 
  credentials: true 
};

server.use(cors(corsOptions)); 
server.use(bodyParser.json());
server.use(middlewares);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.get('users').find({ email, password }).value();

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

  res.status(200).json({ token, user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName } });
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
