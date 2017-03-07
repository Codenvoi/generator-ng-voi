'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:filter moduleA.someFilter', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/filter'))
            .withArguments(['moduleA.someFilter'])
            .toPromise();
    });

    it('creates filter', function () {
        assert.file([
            'app/src/moduleA/someFilter.filter.js'
        ]);
    });
});

describe('generator-ng-voi:filter someFilter', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/filter'))
            .withArguments(['someFilter'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and filter', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someFilter.filter.js'
        ]);
    });
});

describe('generator-ng-voi:filter', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/filter'))
            .withPrompts({filterName:'someFilter', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and filter', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someFilter.filter.js'
        ]);
    });
});
