node -v.14.17.5
npm -v.6.14.14

1. 컴포넌트 구성에 필요한 폴더 구조 만들기

```
npm install react react-dom @types/react node-sass -D
```

2. typescript
   react나 react dom은 다른 리액트 프로젝트에서 디자인 시스템으로 사용될것이므로, peer dependency로 넣어주도록 변경해줍니다.

단, 중요한 부분이 맨 윗줄 두가지에 있는데요, "declaration": true 와 "declarationDir": "./build" 를 명시해 줌으로써, 우리가 만들 디자인 시스템의 타입들을 자동으로 생성해 빌드 폴더에 넣어주는 역할을 하게 됩니다.

그리고, 중요한 사항이 있는데 component 를 제작한 tsx파일에서 interface나 enum을 export 해주지 않으면 declaration 정의를 실패해 build가 실패하는 케이스가 있으니, 모든 interface나 enum은 export해주는것이 빌드 실패를 막을수 있습니다.

또한, preserveModules: true 로 옵션을 줌으로써 기존 폴더구조 그대로 build를 할수 있게 하여 그 구조 그대로 아래와 가지 두가지 방식으로 import 할수 있게 됩니다. https://rollupjs.org/guide/en/#preservemodules 에 가시면 자세한 설명이 나와있으니 참고바랍니다.

```
npm install -D typescript
```

3. rollup 설정에 필요한 라이브러리들을 아래 명령어로 설치 해줍니다.

```
npm install -D rollup rollup-plugin-typescript2 rollup-plugin-postcss @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external @rollup/plugin-image
```

```
npm install -D @storybook/react @babel/core babel-preset-react-app babel-loader tailwindcss postcss autoprefixer
```

```
npm install -D html-webpack-plugin
```

```
npm install -D @storybook/addon-links @storybook/a
ddon-essentials @storybook/addon-interactions

```

## bugs

** require() of ES Module E:\design-kit2\postcss.config.js from E:\design-kit2\node_modules\lilconfig\dist\index.js not supported. **

npm install rollup@~2.66

Webpack5 기반 프로젝트에 Storybook 설정하기
https://kimyejin.tistory.com/entry/Webpack5-%EA%B8%B0%EB%B0%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-Storybook-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

## refer

https://github.com/ecklf/react-tailwind-storybook/blob/master/.storybook/main.js

## deploy

vercel

- https://simple-design-kit.netlify.app/
- simple-design-kit.vercel.app
