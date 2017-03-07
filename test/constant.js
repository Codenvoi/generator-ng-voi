'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:constant moduleA.someConstant', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/constant'))
            .withArguments(['moduleA.someConstant'])
            .toPromise();
    });

    it('creates constant', function () {
        assert.file([
            'app/src/moduleA/someConstant.constant.js'
        ]);
    });
});

describe('generator-ng-voi:constant someConstant', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/constant'))
            .withArguments(['someConstant'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and constant', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someConstant.constant.js'
        ]);
    });
});

describe('generator-ng-voi:constant', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/constant'))
            .withPrompts({constantName:'someConstant', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and constant', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someConstant.constant.js'
        ]);
    });
});
