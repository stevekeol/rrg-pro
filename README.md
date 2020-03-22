# rrg-pro

基于react,redux,create-react-app,react-app-rewired的多人协作版react的源码架构。

对代码有疑问，[参考](https://github.com/stevekeol/zhurong-web)

### 使用
```
//clone项目
git clone https://github.com/stevekeol/rrg-pro

//安装依赖项
npm install

//启动项目
npm start
```

### 技术栈
 + 语言框架: [react]();
 + 基于的脚手架: [create-react-app]();
 + create-react-app内置的工具: [babel](), [webpack]();
 + 覆盖create-react-app的默认配置工具: [react-app-rewired](); [customize-cra]();
 + 状态管理: [redux]();
 + UI组件： [antd-mobile]();
 + UI图标: [antd-design-icons]();
 + 网络请求: [axios]();
 + 代码校验: [exlint]();

 + 地图组件: [rc-bmap]();
 + 复制粘贴组件: [copy-to-clipboard]();

 + 按需导入js和css代码插件: [babel-plugin-import]();
 + 装饰器插件: [transform-decorators-legacy]()

### 关注的技术点

+ [Tabbar的实现逻辑](https://mobile.ant.design/components/tab-bar-cn/#components-tab-bar-demo-basic)
+ Tabbar仅仅在home页面中设置的bar的组件页面中显示，其余更深的页面自动隐藏！??
+ ```<Route path="/hospitals/:id" component={Item} />```注意该写法！
+ 