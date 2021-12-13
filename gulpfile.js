const gulp = require("gulp");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const linter = require("gulp-eslint");

gulp.task("js", () => {
  return gulp
    .src("js/*.js")
    .pipe(babel())
    .pipe(linter())
    .pipe(linter.format())
    .pipe(uglify())
    .pipe(concat("build.js"))
    .pipe(gulp.dest("build"));
});

gulp.task("styles", () => {
  return gulp
    .src("style/style.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("build"));
});

gulp.task("default", defaultTask());

gulp.task("watch", () => {
  return gulp.watch(["js/*.js", "style/*.scss"], {}, defaultTask());
});

function defaultTask() {
  return gulp.parallel("js", "styles");
}
