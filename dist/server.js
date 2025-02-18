"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const http_proxy_1 = __importDefault(require("http-proxy"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const apiProxy = http_proxy_1.default.createProxyServer();
app.use((0, cors_1.default)());
app.all("/<route-name>/*", (req, res, next) => {
    req.url = req.url.replace('/user', '');
    apiProxy.web(req, res, { target: 'http://humix-user-api.user.svc.clusterlocal:8080' }, function (e) {
        if (e) {
            console.error(e);
            next(e);
        }
    });
});
app.all("/<route-name>/*", (req, res, next) => {
    req.url = req.url.replace('/album', '');
    apiProxy.web(req, res, { target: 'http://humix-album-api.album.svc.clusterlocal:8080' }, function (e) {
        if (e) {
            console.error(e);
            next(e);
        }
    });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(port, () => {
    console.log(`API Gateway is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map