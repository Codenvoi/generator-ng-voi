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

        // ask for controller and view
        var prompts = [
            {
                type: 'input',
                name: 'ctrlRequired',
                message: 'Create controller for module? (y/n)',
                default: 'y'
            },
            {
                type: 'input',
                name: 'viewRequired',
                message: 'Create view for module? (y/n)',
                default: 'y'
            }
        ];

        // check if module name is not entered ask for name as well
        if(this.args.length<=0){
            prompts.unshift({
                type: 'input',
                name: 'name',
                message: 'Enter name of the module: ',
                default: null
            })
        }

        return this.prompt(prompts).then(function (props) {
            if(this.args.length>0){
                // add module if given through args
                props.name = this.args[0];
            }
            // To access props later use this.props.someAnswer;
            this.props = props;
            this.props.ctrlRequired = helpers.createBoolean(this.props.ctrlRequired);
            this.props.viewRequired = helpers.createBoolean(this.props.viewRequired);

            // validations on given input value
            if(!helpers.validateVariableNameRegex(props.name)){
                this.log(chalk.red(' * Only alphanumeric (which starts with a alphabet) values are allowed!'));
                this.log(chalk.red(' * Validation error on input values! exiting now..'));
                process.exit(0);
            }

            // check if module folder already exists
            if(this.fs.exists(this.destinationPath('app/src/'+props.name+"/"+props.name+".module.js"))){
                this.log(chalk.red(' * Module already exists! exiting now..'));
                process.exit(1);
            }

        }.bind(this));
    }

    writing() {

        // module file
        this.fs.copyTpl(
            this.templatePath('../../../templates/_bp/_bp.module.js'),
            this.destinationPath('app/src/'+this.props.name+"/"+this.props.name+".module.js"), {
                moduleName: this.props.name
            }
        );

        // controller file
        if(this.props.ctrlRequired){
            this.fs.copyTpl(
                this.templatePath('../../../templates/_bp/_bp.controller.js'),
                this.destinationPath('app/src/'+this.props.name+"/"+this.props.name+".controller.js"), {
                    moduleName: this.props.name,
                    ctrlName: this.props.name
                }
            );
        }

        // view file
        if(this.props.viewRequired){
            this.fs.copyTpl(
                this.templatePath('../../../templates/_bp/_bp.html'),
                this.destinationPath('app/src/'+this.props.name+"/"+this.props.name+".html"), {
                    viewName: this.props.name
                }
            );
        }

    }

    end() {

        this.log(chalk.bold.cyan("Module "+this.props.name+" is ready to use :) "));

    }
};
