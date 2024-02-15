import app from './app';
import { run } from './database';


app.listen(3000);
run();

console.log('Server running on port 3000')