const gulp = require('gulp');
const webpack = require('webpack');
const gulpwebpack = require('gulp-webpack');
gulp.task('default', (done)=>{
    done();
});
gulp.task('serve', (done) => {
    return gulp.src('src/web/scripts/game.ts')
    .pipe(gulpwebpack({
        module: {
          rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
          ]
        },
      }))
    .pipe(gulp.dest('dist/'));
});