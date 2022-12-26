// import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
// node_modules에서 third party 모듈을 사용하는 용도,
// js 이외의 확장자 (ts, tsx) 파일을 불러오기 위해서도 이 플러그인을 필요로 함
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// peerDependency로 설치된 라이브러리의 코드가 번들링된 결과에 포함되지 않고,
// import 구문으로 불러와서 사용할 수 있게 만들어주는 플러그인
import postcss from "rollup-plugin-postcss";
// scss,css 관련 플러그인
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

// import image from "@rollup/plugin-image"; // ?
import commonjs from "@rollup/plugin-commonjs";
// 외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환하는 플러그인
import pkg from "./package.json";
const tailwindcss = require("tailwindcss");

export default {
  input: "./index.ts",
  output: [
    {
      dir: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ["**/__tests__/**", "**/*.stories.tsx"],
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    terser(),
  ],
};
