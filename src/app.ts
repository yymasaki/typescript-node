import express, { Request , Response, NextFunction} from 'express';
const app = express();
app.use('/', (req, res, next) => {
    console.log('Hello');
    throw new Error();
    next();
})
app.get('/', (req, res, next) => {
    res.send('<h1>Hello</h1>');
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('hello');
    next();
})
app.listen(3000);