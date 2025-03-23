import gulp from "gulp";

gulp.task("webfonts", async function () {
  const webfonts = (await import("gulp-google-webfonts")).default;

  return gulp
    .src("fonts.txt")
    .pipe(
      webfonts({
        css: true,
        dest: "dist/fonts",
        fontsDir: "fonts",
      })
    )
    .pipe(gulp.dest("dist/css"));
});
