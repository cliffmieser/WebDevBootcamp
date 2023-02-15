import { createRequire } from 'module'; //recreates require function
const require = createRequire(import.meta.url); //

(async () => {
    const { franc } = await import('franc');
    const colors = require('colors');
    const langs = require('langs');
    const input = process.argv[2];
    const langCode = franc(input);
    if (langCode == 'und') {
        console.log('Sorry');
    } else {
        const language = langs.where('3', langCode);
        console.log(`Our best guess is : ${(language.name).red}`);
    }           
})();




