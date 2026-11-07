console.log("Welcome to TypeScript")


/*

nodejs = Is a javascript runtime environment
npm = node package manager
tsc = typescript complier (which is included in npm and installed using the command npm install -g typescript)

we have to complie the typescript file to javascript and execute using nodejs

compling the typescript to javascript:

tsc filepath/filename.ts
Ex: tsc Introduction_to_TypeScript_02\FirstDemo.ts
This command compiles the ts file to js file and creates the js file at the same directory with extension js with same file name

executing the js file:
node filepath/filename.ts
Ex:node Introduction_to_TypeScript_02\FirstDemo.js

How to execute the typescript file diretly:
    we have to install the additional package typeScript executor, which executes directly without compiling.

Installing typeScript executor:
    npm install -g tsx

Execute the ts file directly without compilation:
    tsx filepath\filename.ts
    Ex: tsx Introduction_to_TypeScript_02\FirstDemo.ts

WE CAN COMPLETLY AVOID THE JS COMPILE AND EXECUTING IT. WE CAN DIRECTLY EXECUTE THE TS FILE USING tsx COMMAND




*/