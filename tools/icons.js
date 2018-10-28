const fs = require('fs');
var _ = require('lodash');


function writeReactFile(data) {
    const fullString = `import React from "react"; \r\n import PropTypes from "prop-types"; \r\n ${data}`
    fs.writeFileSync("./src/IconMerge/IconMerge.js", fullString);
}

function writeType(data, names) {
    let type;
    names.map( item => {
        const typeItem = `'${item}' | `;
        type += typeItem
    })
    // const propsString = `IconMerge.propTypes = {\r\n  color: PropTypes.string, \r\n     icon: PropTypes.oneOf([ \r\n    ${props} \r\n ] \r\n    ) \r\n }`
    // let fullStringProps = `${data} \r\n ${propsString}`;

    // const str = fullStringProps.replace('undefined', '');

    //writeReactFile(str);
    console.log(data, type)
}

function writeSwitch(data, names) {
    let caseStr;

    names.map(item => {
        const caseItem = `case '${item}': \r\n  return <${item} fill={this.props.color} width={getIconSize(size)} height={getIconSize(size)} /> \r\n`;
        caseStr += caseItem;
    }); 

    //let compString = `export default class IconMerge extends React.Component { \r\n     render() { \r\n switch(this.props.icon) { \r\n ${caseStr} \r\n } \r\n } \r\n }`;

    let fullString = `${data} \r\n ${caseStr}`;

    let str = fullString.replace('undefined', '');

    writeType(str, names);
}

function writeImports(files) {
    let importString;
    let namesArr = [];
    /* Files for sizes 12px and 16px */
    files.map( item => {
        const clearName = item.substring(0, item.indexOf("."));
        const camelName = _.camelCase(clearName).toString();
        if(camelName){
            const capName = camelName[0].toUpperCase() + camelName.slice(1) + 'Svg';
            const importStringChunk = `const ${capName} = require(../icons/${item}') as string; \r\n`;
            namesArr.push(capName);
            importString += importStringChunk;        
        }
    })
    const str = importString.replace("undefined", "");

    writeSwitch(str, namesArr);
}

function getFiles() {
    const files = fs.readdirSync("./src/icons");
    writeImports(files)
}



getFiles();

/**
 * if(importString !== undefined) {
        fs.writeFileSync("test.js", importString);
    }
 * 
 */