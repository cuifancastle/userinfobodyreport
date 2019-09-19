# userinfobodyreport

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 添加scss px2rem-loader
npm install px2rem-loader --save-dev
在node_modules/@vue/cli-service/lib/css.js  applyLoaders 函数中，直接添加一个"rule"
rule
.use('px2rem-loader')
.loader('px2rem-loader')
.options({emUit: 75})
针对scss都会转化；
注意：使用 px2rem-loader 后再使用px上有些不同：
    直接写 px ，编译后会直接转化成rem —— 除开下面两种情况，其他长度用这个
    在 px 后面添加 /*no*/ ，不会转化 px，会原样输出。 —— 一般border需用这个
    在 px 后面添加 /*px*/ ，会根据 dpr 的不同，生成三套代码。—— 一般字体需用这个
————————————————
版权声明：本文为CSDN博主「Cyan_H」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42392522/article/details/82977929