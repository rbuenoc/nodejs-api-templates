const { src, dest, series, parallel } = require('gulp');
const del = require('del');
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


const appConfig = () => {
    return src('src/config.yml')
        .pipe(dest('dist'));
}

const loggingConfig = () => {
    return src('src/common/logging/config.json')
        .pipe(dest('dist/common/logging'));
}

const config = parallel(appConfig, loggingConfig);


const install = () => {
    return src('package*.json')
        .pipe(dest('dist'))
        .pipe(gulpInstall({ npm: '--production', }));
}


const resources = () => {
    return src('src/resources/**/*')
        .pipe(dest('dist/resources'));
}


const build = series(clean, compile, config, resources);

const rebuild = series(build, install);


module.exports = {
    rebuild,
    build,
    clean,
}
