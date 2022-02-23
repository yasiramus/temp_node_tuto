// when we install nodejs we instal the npm package by default
// package are folder which contain js codes 


// npm-global command
// npm version
//local dependency-use it only in this particular project
//npm i <packageaname>

//global dependency -use it in any project
//npm install -g <packageName>

//package.json -manifest file (stores important info about projecy/package)
//3  ways to intialize / create the package.json
//1.manual approah (create package.jjson in the root,create properities etc)
//2.npm init (step by step, press enter to skip)
//3. npm init -y (everything default)

//why do we need the package.json
//we need it in order to provide information about our project
//to install depenciens that we will be installing for the project

//lodash is a tilttit liberary
const lodash=require('lodash');

const items =[1, [2, [3, [4] ] ] ];
const newItems = lodash.flattenDeep(items)
console.log(newItems, 'hello world');
