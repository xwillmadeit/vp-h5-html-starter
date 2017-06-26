## Development

```js
npm run dev
```

## Production

```js
npm run build
```

## Start

```js
npm start
```

## 脚手架集成

Webpack + SCSS + Autoprefixer + lib-flexible（阿里手机端布局方案）

## 手机端如何使用单位

默认依据 iphone6 的设计稿开发，所有的 px 使用 px2rem，例如设计稿 100px：

```css
width: px2rem(100px);
``` 

字体仍然使用 px

```css
@include font-size(36);
```

具体参考[lib-flexible](https://github.com/amfe/lib-flexible)
