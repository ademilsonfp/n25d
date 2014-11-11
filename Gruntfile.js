module.exports = exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      api: {
        options: {
          mangle: false,
          compress: false,
          sourceMap: true
        },

        files: {
          'api/api.js': require('./src')
        }
      },

      dev: {
        options: {
          enclose: {},
          mangle: true,
          compress: true,
          sourceMap: true
        },

        files: {
          'n25d.dev.js': require('./src')
        }
      },

      dist: {
        options: {
          enclose: {},
          mangle: true,
          compress: true
        },

        files: {
          'n25d.js': require('./src')
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
