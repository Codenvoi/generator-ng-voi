'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:view moduleA.someView', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/view'))
            .withArguments(['moduleA.someView'])
            .toPromise();
    });

    it('creates view', function () {
        assert.file([
            'app/src/moduleA/someView.html'
        ]);
    });
});

describe('generator-ng-voi:view someView', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/view'))
            .withArguments(['someView'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and view', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someView.html'
        ]);
    });
});

describe('generator-ng-voi:view', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/view'))
            .withPrompts({viewName:'someView', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and view', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someView.html'
        ]);
    });
});
