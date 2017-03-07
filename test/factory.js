'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:factory moduleA.someFactory', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/factory'))
            .withArguments(['moduleA.someFactory'])
            .toPromise();
    });

    it('creates factory', function () {
        assert.file([
            'app/src/moduleA/someFactory.factory.js'
        ]);
    });
});

describe('generator-ng-voi:factory someFactory', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/factory'))
            .withArguments(['someFactory'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and factory', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someFactory.factory.js'
        ]);
    });
});

describe('generator-ng-voi:factory', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/factory'))
            .withPrompts({factoryName:'someFactory', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and factory', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someFactory.factory.js'
        ]);
    });
});
