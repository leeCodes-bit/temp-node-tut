// THIRD WAY
const {readFile, writeFile} = require('fs').promises
const path = require('path');

const start = async() => {
    try{
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile('./content/result-mind-grenade', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
    console.log(first, second);
    }catch(error){
        console.log(error);
    }
}
start()

// SECOND WAY
// const {readFile, writeFile} = require('fs');
// const path = require('path');
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try{
//     const first = await readFilePromise('./content/first.txt', 'utf8')
//     const second = await readFilePromise('./content/second.txt', 'utf8')
//     await writeFilePromise('./content/result-mind-grenade', `THIS IS AWESOME: ${first} ${second}`)
//     console.log(first, second);
//     }catch(error){
//         console.log(error);
//     }
// }
// start()


// ONE WAY

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }else{
//                resolve(data);
//             }
//         })
//     })
// }
// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))