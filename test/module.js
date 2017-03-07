'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:module moduleA', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/module'))
            .withArguments(['moduleA'])
            .withPrompts({ctrlRequired: 'y', viewRequired: 'y'})
            .toPromise();
    });

    it('creates module', function () {
        assert.file([
            'app/src/moduleA/moduleA.module.js',
            'app/src/moduleA/moduleA.controller.js',
            'app/src/moduleA/moduleA.html'
        ]);
    });
});

describe('generator-ng-voi:module', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/module'))
            .withPrompts({name:'moduleA', ctrlRequired: 'y', viewRequired: 'y'})
            .toPromise();
    });

    it('creates module', function () {
        assert.file([
            'app/src/moduleA/moduleA.module.js',
            'app/src/moduleA/moduleA.controller.js',
            'app/src/moduleA/moduleA.html'
        ]);
    });
});
