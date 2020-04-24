const { series, parallel } = require('gulp')
const { src, dest} = require('gulp')
const gulp = require('gulp')

const sass = require('gulp-sass')
const concat = require('gulp-concat')
const watch = require('gulp-watch')


//TRECHO REFERENTE AO VISUAL
function transformaSASS() {
    return src('sass/index.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('#DeuRuim', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(dest('css'))
}

function monitorarArquivos() {
    watch('sass/**/*.sass', ['transformaSASS'])
}


gulp.task('transformaSASS', transformaSASS)
gulp.task('watch', monitorarArquivos)


module.exports.default = parallel(
    transformaSASS,
    monitorarArquivos
)