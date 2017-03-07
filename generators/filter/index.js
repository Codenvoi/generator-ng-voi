'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var helpers = require('../../helpers');

module.exports = class extends Generator{

    constructor(args, opts){
        super(args, opts);
    }

    prompting() {

        this.log(yosay(
            'Greetings by ' + chalk.bold.yellow('ng-voi') + ', a simple and easy to use AngularJS scaffolding generator'
        ));

        var prompts = [];

        var filterQuestion = {
            type: 'input',
            name: 'filterName',
            message: 'Enter name of filter?',
            default: null
        };

        var moduleQuestion = {
            type: 'input',
            name: 'moduleName',
            message: 'Add this filter to which module? (type name)',
            default: null
        };

        // check if module name is not entered ask for name as well
        var arr = (this.args.length>0)?this.args[0].split('.'):[];
        if(arr.length<=0){
            // no args
            prompts.push(filterQuestion);
            prompts.push(moduleQuestion);
        }
        else if(arr.length == 1){
            // only ctrl name is given, ask module name
            prompts.push(moduleQuestion);
        }
        else if(arr.length == 2){
            // both are provided with arguments
        }

        return this.prompt(prompts).then(function (props) {
            if(arr.length == 1){
                // only ctrl name is given
                props.filterName = arr[0];
            }
            else if(arr.length == 2){
                // both are provided with arguments
                props.moduleName = arr[0];
                props.filterName = arr[1];
            }
            // To access props later use this.props.someAnswer;
            this.props = props;

            // validations on given input value
            if(!helpers.validateVariableNameRegex(props.moduleName) || !helpers.validateDirectoryAndVariableName(props.filterName)){
                this.log(chalk.red(' * Only alphanumeric (which starts with a alphabet) values are allowed!'));
                this.log(chalk.red(' * Validation error on input values! exiting now..'));
                process.exit(0);
            }


        }.bind(this));
    }

    writing() {

        // check if module file exists
        if(!this.fs.exists(this.destinationPath('app/src/'+this.props.moduleName+"/"+this.props.moduleName+".module.js"))){
            // if not exists create module as well
            // module file
            this.fs.copyTpl(
                this.templatePath('../../../templates/_bp/_bp.module.js'),
                this.destinationPath('app/src/'+this.props.moduleName+"/"+this.props.moduleName+".module.js"), {
                    moduleName: this.props.moduleName
                }
            );
        }

        // check if module file exists
        if(!this.fs.exists(this.destinationPath('app/src/'+this.props.moduleName+"/"+this.props.filterName + ".filter.js"))) {
            // controller file
            var filePath = this.props.filterName.split('/');
            this.fs.copyTpl(
                this.templatePath('../../../templates/_bp/_bp.filter.js'),
                this.destinationPath('app/src/' + this.props.moduleName + "/" + this.props.filterName + ".filter.js"), {
                    moduleName: this.props.moduleName,
                    filterName: (filePath.length>1)?filePath[filePath.length-1]:this.props.filterName
                }
            );
        }
        else{
            // controller already exists
            this.log(chalk.red(' * Filter already exists! exiting now..'));
            process.exit(1);
        }

    }

    end() {

        this.log(chalk.bold.cyan("Filter "+this.props.filterName+" is ready to use :) "));

    }
};

