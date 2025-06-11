import fs from 'fs/promises'

const list = await fs.readFile("chores/list.json", "utf-8")
const parsedData = JSON.parse(list)


function checkRemoveArgs() {
    if(process.argv[3] === undefined) {
        console.log("Usage: node main.js remove <title>")
        return
    }
    removeChores()
}

async function removeChores() {
    try {
        const newData = parsedData.filter((item) => item.title !== process.argv[3])
        const isExist = parsedData.some((item) => item.title === process.argv[3])
        if(!isExist){
            console.log("[*] Chore not found")
            return
        }

        await fs.writeFile("chores/list.json", JSON.stringify(newData, null, 2))
        console.log("[*] Chore removed")

    } catch (error) {
        console.log("[-]",error.message)
    }

}




export {checkRemoveArgs, parsedData};