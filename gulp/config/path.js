// Получаем имя папки проекта
import { watch } from "fs";
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    svgsprite: `${buildFolder}/images/svgsprite/`,
    files: `${buildFolder}/files/`,
    js: `${buildFolder}/js/`,
    icons: `${buildFolder}/images/icons/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    avif: `${srcFolder}/images/**/*.{jpg,jpeg, gif}`,
    svgsprite: `${srcFolder}/svgsprite/**/*`,
    js: `${srcFolder}/js/main.js`,
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    icons: `${srcFolder}/images/icons/**/*`,
  },
  watch: {
    html: `${srcFolder}/**/*.*`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/images/**/*.*`,
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
    icons: `${srcFolder}/images/icons/**/*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
