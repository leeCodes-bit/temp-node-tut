// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
//  module - info about current module (file)
//  process - info about env where the program is been executed

console.log(__dirname);

setInterval(() => {
    console.log("Hello world");
}, 1000);