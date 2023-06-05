import fs from "fs"

const readFile = (filename) => new Promise((resolve, reject)=>{
    fs.readFile(filename, (err, content) =>{
        if (err) reject(err);
        else resolve(content);
    })
});

async function soma(){
    const c1 = await readFile("./1.txt");
    const c2 = await readFile("./2.txt");
    const c3 = await readFile("./3.txt");
    console.log(c1+c2+c3);
}

console.log(1);
soma();
console.log(2);