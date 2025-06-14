import { checkArgs, parsedData } from "./functions/AddChore.js";
import { checkRemoveArgs } from "./functions/RemoveChore.js";

const commands = {
    add: checkArgs,
    remove: checkRemoveArgs,
    list: () => parsedData.forEach(data => console.log(`${data.title}: ${data.description}`))
}
const cmd = process.argv[2]

if(commands[cmd]) commands[cmd]()
else console.log("Command not found | Read commands.txt")
