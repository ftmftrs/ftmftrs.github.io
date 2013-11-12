module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    progressive: true,
                    cwd: 'dist/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-imagemagick');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['imagemagick-resize', 'imagemin']);
};
