
module.exports = {
    createBoolean,
    validateVariableNameRegex,
    validateDirectoryName,
    validateDirectoryAndVariableName,
    validateProjectName: validateProjectName
};

function createBoolean(value){
    switch(value){
        case 'y':
        case 'Y':
        case 'yes':
        case 'YES':
        case true:
            return true;
        default:
            return false;
    }
}

function validateVariableNameRegex(value){
    return /^[a-zA-Z][a-zA-Z0-9]+$/.test(value);
}

function validateDirectoryName(value){
    return /^[a-zA-Z0-9-_][a-zA-Z0-9-_ ]+$/.test(value);
}

function validateDirectoryAndVariableName(value){
    var arr = value.split('/');
    // if file name is valid
    if(validateVariableNameRegex(arr[arr.length-1])){
        // go further
        for(var i=0; i<arr.length-1; i++){
            if(!validateDirectoryName(arr[i])){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

function validateProjectName(value){
    return /^[a-z0-9][a-z0-9-_]+$/.test(value);
}
