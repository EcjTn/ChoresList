## 🧹 Simple Chore CLI

A basic Node.js command-line tool to manage a list of chores.
Stores data in a .json file with title and description.

## 📦 Features

- Add a new chore (title + description)
- List all chores
- Remove a chore by title
- Complete a chore by title

## 🛠 Requirements

- Node.js (v14 or higher)

## 📄 Usage

Run the CLI using:

   node main <command>

Available Commands:

```
   add      -> Add a new chore
   list     -> Display all saved chores
   remove   -> Remove a chore by title
```

Examples:

```
   node main.js add "title" "description"
   node main.js remove "title"
   node main.js complete "title
   node main.js list
```

## 📁 Data Storage

All chore data is stored in a JSON file (e.g., list.json)

Each entry looks like:

```
   {
     "title": "Laundry",
     "description": "Wash and dry clothes before 6 PM"
   }
```

## 📌 Notes

- Read commands.txt for help
- This is a basic CLI for learning and quick use
