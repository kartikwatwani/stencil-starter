const gulp = require('gulp');
const replace = require('gulp-replace');
const shell = require('gulp-shell');
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

// Define paths to the relevant files and folders
const paths = {

    angularFolder: './packages/angular/projects/my-library-angular',
    files: [
        './packages/{core,angular,vue}/**/*.{ts,json,html,md,tsx}'
    ]
};

// Gulp task to rename the library
gulp.task('rename', (done) => {
    const newName = argv.name;
    
    if (!newName) {
        console.error('Please provide a new name using --name argument');
        done();
        return;
    }



    // Update other files (core, angular, vue)
    gulp.src(paths.files, { base: './' })
        .pipe(replace('my-library', newName))
        .pipe(gulp.dest('./'));

    done();
});

// Gulp task to rename the angular folder
gulp.task('rename-folder', (done) => {
    const newName = argv.name;
    if (!newName) {
        console.error('Please provide a new name using --name argument');
        done();
        return;
    }

    const newFolderName = `./packages/angular/projects/${newName}-angular`;

    if (fs.existsSync(paths.angularFolder)) {
        fs.renameSync(paths.angularFolder, newFolderName);
        console.log(`Renamed folder to: ${newFolderName}`);
    } else {
        console.error(`Folder ${paths.angularFolder} does not exist.`);
    }

    done();
});

// Gulp task to install dependencies and run build
gulp.task('install-packages', shell.task([
    'npm install', 
    'npm install --prefix ./packages/core', 
    'npm install --prefix ./packages/angular',
    'npm run build --prefix ./packages/core', 
    'npm run build --prefix ./packages/angular' 
]));

gulp.task('watch',shell.task([
    'npm run start --prefix ./packages/core',
    'npm run start --prefix ./packages/angular' 
]));

// Default task to run rename, rename-folder, install packages, and run the build
gulp.task('default', gulp.series('rename', 'rename-folder', 'install-packages', 'watch'));