import fs from 'fs/promises'

const list = await fs.readFile("chores/list.json", "utf-8")
const parsedData = JSON.parse(list)

function checkCompleteArgs() {
    if(process.argv[3] === undefined) {
        console.log("Usage: node main.js complete <title>")
        return
    }
    completeChores()
}

async function completeChores() {
    const findData = parsedData.findIndex((item) => item.title === process.argv[3]) //returns a number
    if(findData === -1) {
        console.log("[*] Chore not found")
        return
    }
    
    parsedData[findData].title = "Completed!"
    parsedData[findData].description = "This chore/task is done"
    await fs.writeFile("chores/list.json", JSON.stringify(parsedData, null, 2))
    console.log("[*] Chore completed")
}



export {checkCompleteArgs, parsedData}
