module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "imagemagick-resize":{
            xs:{
                from:'src/img/',
                to:'dist/img/xs/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:300
                }
            },
            s:{
                from:'src/img/',
                to:'dist/img/s/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:480
                }
            },
            m:{
                from:'src/img/',
                to:'dist/img/m/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:768
                }
            },
            l:{
                from:'src/img/',
                to:'dist/img/l/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:992
                }
            },
            xl:{
                from:'src/img/',
                to:'dist/img/xl/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:1382
                }
            },
            xxl:{
                from:'src/img/',
                to:'dist/img/xxl/',
                files:'*.(JPG|jpg)',
                props:{
                    quality: 1,
                    width:1600
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-imagemagick');

    // Default task(s).
    grunt.registerTask('default', ['imagemagick-resize']);
};
