/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    execute: {
        target: {
            src: ['js/generate-feed.js']
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-execute');

  // Default task.
  grunt.registerTask('default', ['execute']);

};
