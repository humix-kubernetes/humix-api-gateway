const ROUTES = [
    {
        url: '/user',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://humix-user-api.user.svc.clusterlocal:8080",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    },
    {
        url: '/album',
        proxy: {
            target: "http://humix-album-api.album.svc.clusterlocal:8080",
            changeOrigin: true,
            pathRewrite: {
                [`^/album`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;