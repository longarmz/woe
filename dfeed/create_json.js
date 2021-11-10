#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs')

const file = readline.createInterface({
  input:  fs.createReadStream('quotes'),
  output: process.stdout,
  terminal: false
});

let qArray, qString = "";
fs.writeFile('qDB', "", (err)=>{});

//build string
file.on('line', (line) => {
  qString+=`${line}\n`;
});


file.on('close', () => {
  qArray = qString.split("\n\n")
  
  for(let element of qArray) {
    let entry = element.split("\n");
    [quote, author, category] = entry;

    let jsonQuote = JSON.stringify ({ quote: `${quote}`,
    			              author: `${author}`,
                                      category: `${category}` });

    fs.appendFile('qDB', jsonQuote+"\n",  (err)=>{});
  }
});
