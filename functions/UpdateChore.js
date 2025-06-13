import fs from 'fs/promises'

const list = await fs.readFile("chores/list.json", "utf-8")
const parsedData = JSON.parse(list)
//

//function checkUpdateArgs()
