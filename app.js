import express from 'express';
import * as path from 'path';
import * as url from 'url';
import bodyParser from 'body-parser';
import session from 'express-session'
import fileUpload from 'express-fileupload';

const __dirname=url.fileURLToPath(new URL('.',import.meta.url))
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"my name is dev"}))
app.use(fileUpload());

// Routelevel Middleware
import indexRouter from'./routes/index.js';
import adminRouter from './routes/admin.js';
import userRouter from './routes/user.js';

// configuration to load static file
app.use(express.static(path.join(__dirname,"public")));

//configuration to load template 
app.set('view engine','ejs');
app.set('views','./views');

app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use('/',indexRouter);

app.listen(3000);
console.log("server invoked at link http://localhost:3000");