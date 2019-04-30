const fs = require('fs-extra');
const args = require('minimist')(process.argv.slice(2));

const components = args._;

components.reduce((cur, componentName) => {
    return cur.then(() => new Promise((resolve, reject) => {
        console.log('generating files for %s component', componentName);
        const indexContent = `export default from './${componentName}.js'`;
        const compContent = `import React from 'react';

const ${componentName} = ({}) => (
    <div>
        ${componentName}
    </div>
);
export default ${componentName};
    `;
        const exportContent = `
export {default as ${componentName}} from './${componentName}';`;
        const dirPath = `src/components/${componentName}`;
        const generalIndexPath = `src/components/index.js`;
        const indexPath = `${dirPath}/index.js`;
        const compPath = `${dirPath}/${componentName}.js`;
        return fs.ensureDir(dirPath)
            .then(() => fs.writeFile(indexPath, indexContent, 'utf8'))
            .then(() => fs.writeFile(compPath, compContent, 'utf8'))
            .then(() => fs.readFile(generalIndexPath, 'utf8'))
            .then(actual => fs.writeFile(generalIndexPath, `${actual}${exportContent}`, 'utf8'))
            .then(() => {
                console.log('done for %s', componentName);
                resolve();
            })
            .catch(reject)
    }))
    
}, Promise.resolve());