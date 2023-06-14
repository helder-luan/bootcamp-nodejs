import 'dotenv/config';
import { app } from './index.js';

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});