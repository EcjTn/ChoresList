import fs from 'fs/promises'

const listChores = fs.readFile("chores/list.json", "utf-8")
const parsedData = JSON.parse(await listChores)

function checkArgs() {
    if(process.argv[3] === undefined || process.argv[4] === undefined) {
        console.log("Usage: node main.js add <title> <description>")
        console.log(`!! Make sure to add quotes around your description !!`)
        return
    }
    addChores()
}


async function addChores() {
    parsedData.push(
        {title: process.argv[3],
        description: process.argv[4].trim()}
    )

    await fs.writeFile("chores/list.json", JSON.stringify(parsedData, null, 2))
    parsedData.forEach(data => console.log(`${data.title}: ${data.description}`))
}




export {checkArgs, parsedData};