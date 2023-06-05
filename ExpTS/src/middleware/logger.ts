import { Tipo } from './loggerTypes'
import dotenv from 'dotenv';
import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
dotenv.config()


function logger(tipo: Tipo){
    return (req: Request, res: Response, next: NextFunction) => {
      console.log()
        const PATH: string = process.env.LOG_PATH ?? "./logs"
        let message: string = ''
        
        if (tipo === 'completo'){
            message = `${new Date().toISOString()} ${req.url} ${req.method}`;
            
        }else{
            message = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}`
        }
        console.log(message)
        fs.appendFile(PATH, `${message}\n`, (error) => {
            if (error) {
              console.error('Error writing to log file:', error);
            } else {
              console.log('Log message written to file:', message);
            }
          });
        next()
    }
} 

export default logger;