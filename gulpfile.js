const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

gulp.task('default', (done)=>{
    done();
});

gulp.task('build', (done) => {
    webpack({
      entry: __dirname + '/src/web/scripts/main.ts',
      output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }/*,
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }*/
        ]
      },
      plugins: [
        new HtmlWebpackPlugin(),
        // new ExtractTextPlugin("style.css")
      ],
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      },
    }).run((err, stats) => {
      console.log(__dirname + '/dist');
      console.log(stats);
      if (err) {
        done(new Error(err));
      }
      else {
        done();
      }
    });
});