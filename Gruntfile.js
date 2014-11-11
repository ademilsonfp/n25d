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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
