import { person, sayHello } from './lib';


// const greeting = `Hello Delta Star`;
// console.log(greeting);

// const greetname = (name) => console.log(`Welcome: ${name}`);
// greetname('vzan2012');

// console.log(sayHello(person.name));

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    return response;
};

getPosts().then((response) => response.json()).then((json) => console.log(json));