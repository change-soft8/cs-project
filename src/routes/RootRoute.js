// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import Index from '../components/Index'
export default {
    path: '/',
    component: App,
    childRoutes: [{
        path: '/about',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('../components/About'))
            })
        }
    }],
    indexRoute: {
        component: Index
    }
}

// export default {
//   path: '/',
//   component: App,
//   getChildRoutes(location, cb) {
//     require.ensure([], (require) => {
//       cb(null, [ require('./AboutRoute') ])
//     })
//   },
//   indexRoute: {
//     component: Index
//   }
// }
