import { prompt } from "@clank/prompts";
const name = await prompt("What is your name?");
console.log(`Hello, ${name}!`);
const age = await prompt({
    type: "number",
    message: "How old are you?",
    default: 25,
});
console.log(`You are ${age} years old.`);
