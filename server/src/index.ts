import express from "express";
const { connectToDb, PORT } = require('./db');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const businessRoutes = require('./routes/businessRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/businesses', businessRoutes);
app.use('/bookings', bookingRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err: string) => {
    console.error('Failed to connect to the database', err);
  });
