const express = require('express');
const app = express();
const { PORT } = require('./config/env.js'); // ✅ Destructure PORT from the env config

const userRouter = require('./routes/user.routes.js');
const authRouter = require('./routes/auth.routes.js');
const subscriptionRouter = require('./routes/subscription.routes.js');
const connectToDatabase = require('./database/mongodb.js');
const errorMiddleware = require('./middlewares/error.middleware.js');
const cookieParser = require('cookie-parser') ; 

app.use(express.json()) ; 
app.use(express.urlencoded({extended : false})) ; 
app.use(cookieParser()) ; 

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v2/subscriptions', subscriptionRouter);

app.use(errorMiddleware) ;

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT || 3000, async () => {
  console.log(`Server running at PORT: ${PORT}\nVisit http://localhost:${PORT}`);
  await connectToDatabase();
});
