const { src, dest, series } = require('gulp');
const del = require('del');
const zip = require('gulp-zip');
const { createProject } = require('gulp-typescript');
const tsProject = createProject('tsconfig.json');
const gulpInstall = require("gulp-install");


const clean = () => {
    return new Promise(resolve => {
        del.sync(['dist/**', 'dist*.zip']);
        resolve();
    })
}


const compile = () => {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(dest('dist'));
}


const config = () => {
    return src('src/config.yml')
        .pipe(dest('dist'));
}


const install = () => {
    return src('package*.json')
        .pipe(dest('dist'))
        .pipe(gulpInstall({ npm: '--production', }));
}


const resources = () => {
    return src('src/resources/**/*')
        .pipe(dest('dist/resources'));
}


const compress = () => {
    return src('dist/**/*', { nodir: true, dot: true })
        .pipe(zip('dist.zip'))
        .pipe(dest('./'));
}


const build = series(clean, compile, config, resources);

const rebuild = series(build, install);

const package = series(rebuild, compress);


module.exports = {
    build,
    rebuild,
    package,
}
