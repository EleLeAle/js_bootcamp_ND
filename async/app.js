//adding to the stack
console.log('Hello World 1');

//queueing the callback
setTimeout(function (){
    console.log('Hello World 2');
},0);

//added to the stack
console.log('Hello World 3');


/*
    Output: Hello world 1
    Output: Hello world 3
    Output: Hello world 2
*/