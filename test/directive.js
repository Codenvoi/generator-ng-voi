'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-voi:directive moduleA.someDirective', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/directive'))
            .withArguments(['moduleA.someDirective'])
            .toPromise();
    });

    it('creates directive', function () {
        assert.file([
            'app/src/moduleA/someDirective.directive.js'
        ]);
    });
});

describe('generator-ng-voi:directive someDirective', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/directive'))
            .withArguments(['someDirective'])
            .withPrompts({moduleName: 'moduleB'})
            .toPromise();
    });

    it('creates module and directive', function () {
        assert.file([
            'app/src/moduleB/moduleB.module.js',
            'app/src/moduleB/someDirective.directive.js'
        ]);
    });
});

describe('generator-ng-voi:directive', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/directive'))
            .withPrompts({directiveName:'someDirective', moduleName: 'moduleC'})
            .toPromise();
    });

    it('creates module and directive', function () {
        assert.file([
            'app/src/moduleC/moduleC.module.js',
            'app/src/moduleC/someDirective.directive.js'
        ]);
    });
});
