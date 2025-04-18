import  express  from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('This is the API');
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
