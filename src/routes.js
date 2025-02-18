const ROUTES = [
    {
        url: '/user',
        proxy: {
            target: "http://humix-user-api.user.svc.cluster.local:8080",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    },
    {
        url: '/album',
        proxy: {
            target: "http://humix-album-api.album.svc.cluster.local:8080",
            changeOrigin: true,
            pathRewrite: {
                [`^/album`]: '',
            },
        }
    }
]


exports.ROUTES = ROUTES;