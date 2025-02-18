import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from "express";
import httpProxy from "http-proxy";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 8080;
const apiProxy = httpProxy.createProxyServer();

app.use(cors());

app.all("/<route-name>/*", (req: Request, res: Response, next: NextFunction) => {
    req.url = req.url.replace('/user', '');
    apiProxy.web(req, res, {target: 'http://humix-user-api.user.svc.clusterlocal:8080'}, function(e) {
        if (e) {
            console.error(e);
            next(e);
        }
    });
});

app.all("/<route-name>/*", (req: Request, res: Response, next: NextFunction) => {
    req.url = req.url.replace('/album', '');
    apiProxy.web(req, res, {target: 'http://humix-album-api.album.svc.clusterlocal:8080'}, function(e) {
        if (e) {
            console.error(e);
            next(e);
        }
    });
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); 
  res.status(500).send('Something broke!'); 
});

app.listen(port, () => {
    console.log(`API Gateway is running at http://localhost:${port}`);
});