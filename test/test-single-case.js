import {smartyLanguage} from "../dist/index.js"

const content = `

{cat() hello(5, false)}
{$beans}
{else "cat"}
{if}

`;


const input = content.trim().split('\n');
for (const line of input) {
  const output = smartyLanguage.parser.parse(line);
  console.log("\n" + output.toString() + "\n");
}


