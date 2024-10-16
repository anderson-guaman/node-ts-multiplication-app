import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

// const base= yarg.b;
// const limit=yarg.l;

const {b:base,l:limit,s:showTable} = yarg;


// const table = '\n5 x 1 = 5\n'+
// '5 x 2 = 10\n'+
// '5 x 3 = 15\n'+
// '5 x 4 = 20\n'+
// '5 x 5 = 25\n'+
// '5 x 6 = 30\n'+
// '5 x 7 = 35\n'+
// '5 x 8 = 40\n'+
// '5 x 9 = 45\n'+
// '5 x 10 = 50\n'
let table = '';
const info = `
============??===========
        tabla del ${base} 
============??===========\n\n`;



const message = info + table;
if (showTable){
    console.log(message)
}


