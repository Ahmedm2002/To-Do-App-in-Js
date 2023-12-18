# To-Do List Web App

This simple To-Do List web app allows users to add, edit, complete, and delete tasks. It provides an easy-to-use interface for managing tasks with due dates.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Styling](#styling)
- [Default Tasks](#default-tasks)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Add Task:** Enter your task and due date, then click the "ADD" button to add it to the list.
- **Edit Task:** Click the "Edit" button to modify the task's content directly on the page.
- **Complete Task:** Check the checkbox to mark a task as completed. Completed tasks are visually indicated with a strike-through.
- **Delete Task:** Click the "Delete" button to remove a task from the list.

## Usage
1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Use the input fields to add tasks with due dates.
4. Interact with the task list using the provided buttons.

## Styling
The web app is styled using CSS to create a clean and user-friendly interface. The main heading, input fields, and buttons are styled for readability and aesthetics. Completed tasks are visually distinguished with a strike-through effect.

## Default Tasks
The app comes with a set of default tasks, which serve as examples. Users can modify, delete, or add new tasks according to their needs.

```javascript
let list = [
  {
    item: "Buy Groceries",
    dueDate: "2023-12-01",
  },
  // Additional default tasks...
];
```

## Functionality
- **Handle Click Function:** The `handleClick` function is responsible for marking tasks as completed or incomplete based on the checkbox state.
- **Show List Function:** The `showList` function dynamically generates the task list on the page, including checkboxes, task content, due dates, and buttons for editing and deleting tasks.
- **Edit Task Function:** The `editTask` function enables users to edit task content directly on the page. It utilizes the `contentEditable` attribute for in-place editing.


## Author

- [Ahmed Mujtaba](https://github.com/Ahmedm2002)



## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance the functionality or styling of the web app.

```
