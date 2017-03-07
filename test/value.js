'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:value moduleA.someValue', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/value'))
            .withArguments(['moduleA.someValue'])
            .toPromise();
    });

    it('creates value', function () {
        assert.file([
            'app/src/moduleA/someValue.value.js'
        ]);
    });
});

describe('generator-ng-voi:value someValue', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/value'))
            .withArguments(['someValue'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and value', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someValue.value.js'
        ]);
    });
});

describe('generator-ng-voi:value', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/value'))
            .withPrompts({valueName:'someValue', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and value', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someValue.value.js'
        ]);
    });
});
