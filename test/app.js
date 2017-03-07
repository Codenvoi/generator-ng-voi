'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:app', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts(
                {adminconfirm: 'n'})
            .toPromise();
    });

    it('creates files', function () {
        assert.file([
            '.gitignore', 'bower.json', 'gulp.config.js', 'gulpfile.js', 'package.json', '.bowerrc',
            'app/index.html'
        ]);
    });

});
