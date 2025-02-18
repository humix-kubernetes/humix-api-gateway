const ROUTES = [
    {
        url: '/user',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://humix-user-api.user.svc.cluster.local",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    },
    {
        url: '/album',
        proxy: {
            target: "http://humix-album-api.album.svc.cluster.local",
            changeOrigin: true,
            pathRewrite: {
                [`^/album`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;