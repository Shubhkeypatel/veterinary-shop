const express = require("express");
const cors = require("cors");
const app = express();

const adminroutes = require('./routes/adminroutes')
const userroutes = require('./routes/userroutes')
const cartroutes = require('./routes/cartroutes')
const contactroutes = require('./routes/contactroutes')
app.use(express.json());
app.use(express.json());

require('./dbconfig') 
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/admin',adminroutes)
app.use('/user',userroutes)
app.use('/cart',cartroutes)
app.use('/contact',contactroutes)

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});