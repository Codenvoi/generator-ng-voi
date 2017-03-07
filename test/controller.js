'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:controller moduleA.someController', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/controller'))
            .withArguments(['moduleA.someController'])
            .toPromise();
    });

    it('creates controller', function () {
        assert.file([
            'app/src/moduleA/someController.controller.js'
        ]);
    });
});

describe('generator-ng-voi:controller someController', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/controller'))
            .withArguments(['someController'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and controller', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someController.controller.js'
        ]);
    });
});

describe('generator-ng-voi:controller', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/controller'))
            .withPrompts({ctrlName:'someController', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and controller', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someController.controller.js'
        ]);
    });
});
