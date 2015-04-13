module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/'],
    uglify: {
      options: {
        sourceMap: true,
        mangle: false,
      },
      target: {
        files: {
          'dist/dd-push.min.js': ["dist/dd-push.js"],
        }
      }
    },
    browserify: {
      options: {
        browserifyOptions: {
          standalone: 'dd.push'
        }
      },
      'dist/dd-push.js': ['lib/**/*.js']
    },
    jshint: {
      options: {
        multistr: true,
        eqnull: true,
      },
      source: [
        "lib/**/*.js"
      ]
    },
    watch: {
      grunt: {
        files: ["Gruntfile.js"],
        tasks: ["build"]
      },
      build: {
        files: ['lib/**/*.js'],
        tasks: ["build"]
      },
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['jshint', 'browserify', "uglify"]);
  grunt.registerTask('default', ["build", "watch"]);
  
};