export default {
    component: require('../components/App'),
    childRoutes: [{
            path: '/logout',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Logout'))
                })
            }
        }, {
            path: '/about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/About'))
                })
            }
        }, {
            path: '/landing',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Landing'))
                })
            }
        },

        {
            path: '/',
            getComponent: (nextState, cb) => {
                return require.ensure([], (require) => {
                    cb(null, require('../components/Home'))
                })
            },

        }

    ]
}
