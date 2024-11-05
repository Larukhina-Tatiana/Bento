import webpack from "webpack-stream";

export const js = () => {
  return (
    app.gulp
      .src(app.path.src.js, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "JS",
            massage: "Error <%= error.message %>",
          })
        )
      )
      .pipe(
        webpack({
          mode: app.isBulid ? "production" : "development",
          entry: {
            index: "./src/js/index.js",
            about: "./src/js/about.js",
          },
          output: {
            filename: "[name].bundle.js",
          },
          module: {
            rules: [
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
        })
      )
      // .pipe(
      //   webpack({
      //     mode: "development",
      //     output: {
      //       filename: "main.min.js",
      //     },
      //   })
      // )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream())
  );
};
// export const js = () => {
//   return (
//     app.gulp
//       .src(app.path.src.js, { sourcemaps: app.isDev })
//       .pipe(
//         app.plugins.plumber(
//           app.plugins.notify.onError({
//             title: "JS",
//             massage: "Error <%= error.message %>",
//           })
//         )
//       )
//       .pipe(
//         webpack({
//           mode: app.isBulid ? "production" : "development",
//           entry: {
//             index: "./src/js/index.js",
//             about: "./src/js/about.js",
//           },
//           output: {
//             filename: "[name].bundle.js",
//           },
//           module: {
//             rules: [
//               {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"],
//               },
//             ],
//           },
//         })
//       )
//       // .pipe(
//       //   webpack({
//       //     mode: "development",
//       //     output: {
//       //       filename: "main.min.js",
//       //     },
//       //   })
//       // )
//       .pipe(app.gulp.dest(app.path.build.js))
//       .pipe(app.plugins.browserSync.stream())
//   );
// };
