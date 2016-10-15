module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            minify: {
                expand: true,
                src: ['built/styles.css'],
                ext: '.min.css'
            }
        },

        concat: {
            css: {
                src: [
                    'built/css/*.css'
                ],
                dest: 'built/styles.css'
            }
        },

        watch: {
            css: {
                files: ['src/less/*.less'],
                tasks: ['css']
            }
        },
        "imagemagick-resize":{
            xs1:{
                from:'src/img/1/',
                to:'dist/img/xs/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:320
                }
            },
            s1:{
                from:'src/img/1/',
                to:'dist/img/s/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:768
                }
            },
            m1:{
                from:'src/img/1/',
                to:'dist/img/m/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1024
                }
            },
            l1:{
                from:'src/img/1/',
                to:'dist/img/l/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1366
                }
            },
            xl1:{
                from:'src/img/1/',
                to:'dist/img/xl/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1680
                }
            },
            xxl1:{
                from:'src/img/1/',
                to:'dist/img/xxl/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1920
                }
            },
            xs0_5:{
                from:'src/img/0.5/',
                to:'dist/img/xs/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:320
                }
            },
            s0_5:{
                from:'src/img/0.5/',
                to:'dist/img/s/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:768/2
                }
            },
            m0_5:{
                from:'src/img/0.5/',
                to:'dist/img/m/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1024/2
                }
            },
            l0_5:{
                from:'src/img/0.5/',
                to:'dist/img/l/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1366/2
                }
            },
            xl0_5:{
                from:'src/img/0.5/',
                to:'dist/img/xl/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1680/2
                }
            },
            xxl0_5:{
                from:'src/img/0.5/',
                to:'dist/img/xxl/',
                files:'*.jpg',
                props:{
                    quality: 0.85,
                    width:1920/2
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    progressive: true,
                    cwd: 'dist/',
                    src: ['img/**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-imagemagick');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['css', 'imagemagick-resize', 'imagemin']);
    grunt.registerTask('css', ['less', 'concat:css', 'cssmin']);
};
