const prompt = require('prompt');
const replace = require('replace-in-file');

//
// Start the prompt
//
prompt.start();

//
// Get properties from the user
//
prompt.get([{
    name: 'textDomain',
    description: 'Enter the text domain, separated by hyphens. Eg: "my-awesome-theme"',
    default: 'empty-parcel'
}, {
    name: 'functionsName',
    description: 'Enter the functions name, separated by underscores. Eg: "my_awesome_theme"',
    default: 'empty_parcel'
}, {
    name: 'docBlocks',
    description: 'Enter the DocBlocks, capitalized and separated by underscores. Eg: "My_Awesome_Theme"',
    default: 'Empty_Parcel'
}], function (err, result) {
    // //
    // // Log the results.
    // //
    // console.log('Command-line input received:');
    // console.log('  username: ' + result.textDomain);
    // console.log('  password: ' + result.functionsName);
    // console.log('  password: ' + result.docBlocks);

    const textDomain = '\'' + result.textDomain + '\'';
    const functionsName = result.functionsName + '_';
    const textDomainStyles = 'Text Domain: ' + result.textDomain;
    const docBlocks = ' ' + result.docBlocks;
    const prefixedHandles = result.textDomain + '-';
    const constants = result.functionsName.toUpperCase() + '_';

    // console.log('1: ' + textDomain);
    // console.log('2: ' + functionsName);
    // console.log('3: ' + textDomainStyles);
    // console.log('4: ' + docBlocks);
    // console.log('5: ' + prefixedHandles);
    // console.log('6: ' + constants);

    const textDomainOptions = {
        files: './**/*.*',
        from: /\'empty-parcel\'/g,
        to: textDomain,
        ignore: [
            './README.md',
            './node_modules/**/*.*',
            './git/**/*.*',
            './github/**/*.*',
            './*.json',
        ],
    };
    const functionsNameOptions = {
        files: './**/*.*',
        from: /empty_parcel_/g,
        to: functionsName,
        ignore: [
            './README.md',
            './node_modules/**/*.*',
            './git/**/*.*',
            './github/**/*.*',
            './*.json',
        ],
    };
    const textDomainStylesOptions = {
        files: './style.css',
        from: /Text Domain: empty-parcel/g,
        to: textDomainStyles,
    };
    const docBlocksOptions = {
        files: './**/*.*',
        from: / empty-parcel/g,
        to: docBlocks,
        ignore: [
            './README.md',
            './node_modules/**/*.*',
            './git/**/*.*',
            './github/**/*.*',
            './*.json',
        ],
    };
    const prefixedHandlesOptions = {
        files: './**/*.*',
        from: /empty-parcel-/g,
        to: prefixedHandles,
        ignore: [
            './README.md',
            './node_modules/**/*.*',
            './git/**/*.*',
            './github/**/*.*',
            './*.json',
        ],
    };
    const constantsOptions = {
        files: './**/*.*',
        from: /EMPTY_PARCEL_/g,
        to: constants,
        ignore: [
            './README.md',
            './node_modules/**/*.*',
            './git/**/*.*',
            './github/**/*.*',
            './*.json',
        ],
    };

    try {
        const textDomainResults = replace.sync(textDomainOptions)
        // console.log('Replacement results:', textDomainResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const functionsNameResults = replace.sync(functionsNameOptions)
        // console.log('Replacement results:', functionsNameResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const textDomainStylesResults = replace.sync(textDomainStylesOptions)
        // console.log('Replacement results:', textDomainStylesResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const docBlocksResults = replace.sync(docBlocksOptions)
        // console.log('Replacement results:', docBlocksResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const prefixedHandlesResults = replace.sync(prefixedHandlesOptions)
        // console.log('Replacement results:', prefixedHandlesResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const constantsResults = replace.sync(constantsOptions)
        // console.log('Replacement results:', constantsResults);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
});