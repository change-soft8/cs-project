[TOC]

cs-project Router Examples
---
### 1. 开发环境

#### 1.1 运行方法

运行： `npm start`

打开端口号为 `3000` 的浏览器窗口，将所有文件全部打包成 **一个文件**，该文件存储在内存中

[http://localhost:3000](http://localhost:3000)

#### 1.2 路由配置

在 [cs-project/entry.js](https://github.com/change-soft8/cs-project/blob/master/entry.js) 文件中配置，如：

```
import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, hashHistory, Route, IndexRoute } from 'react-router'
import App from './src/router-example/components/App'
import About from './src/router-example/components/About'
import Home from './src/router-example/components/Home'
import Landing from './src/router-example/components/Landing'
import Logout from './src/router-example/components/Logout'
import "./src/style/global.css"

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/landing" component={Landing}/>
      <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
), e);
```

> 具体参见配置文件： [cs-project/webpack.config.js](https://github.com/change-soft8/cs-project/blob/master/webpack.config.js)

### 2. 生产环境

#### 2.1 运行方法

运行： `npm pro`

打开端口号为 `8080` 的浏览器窗口，实现了文件的 **按需加载**，分别打包在 `cs-project/cfg/__build__/*.js`

[http://localhost:8080](http://localhost:8080)

#### 2.2 路由配置

在 [cs-project/src/router-example/config/routes.js](https://github.com/change-soft8/cs-project/blob/master/src/router-example/config/routes.js) 文件中配置，如：

```
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
```

> 具体参见配置文件： [cs-project/cfg/webpack.config.js](https://github.com/change-soft8/cs-project/blob/master/cfg/webpack.config.js)

### 3. 测试

#### 3.1 测试文件

运行： `npm test`

#### 3.2 测试单个文件

运行：`npm test  --testFile utils`

#### 3.3 测试多个文件

运行：`npm test  --testFile utils About`

#### 3.4 测试覆盖率

运行： `npm run test:cover`
