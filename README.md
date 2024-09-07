# To-Do List Website

## Overview

This To-Do List application is a simple web-based task manager built with HTML, CSS, and JavaScript. It allows users to add, edit, mark as done, and delete tasks. The application uses local storage to persist tasks across browser sessions.

## Features

- **Add Task**: Add a new task with a name and automatic date.
- **Edit Task**: Edit the task name and update the date.
- **Mark as Done**: Toggle the completion status of a task.
- **Delete Task**: Remove a task from the list.
- **Persistent Storage**: Tasks are stored in the browser's local storage, so they persist even after closing the browser.

## Installation

To run this application locally, follow these steps:

1. **Clone the Repository** (or download the files directly):
   ```bash
   git clone <https://github.com/FatimaALzahrani/To-Do-List.git>
   
2. **Navigate to the Project Directory**
   ```bash
   cd <To-Do-List>

3. **Open the index.html File**
You can simply open the index.html file in your web browser.

<hr>

## Usage

- **Add a Task**:
  - Click the `+` button in the header.
  - Enter the task name in the prompt that appears.

- **Edit a Task**:
  - Click the edit button (pencil icon) next to the task you want to edit.
  - Enter the new task name in the prompt that appears.

- **Mark as Done**:
  - Click the check button (checkmark icon) to mark the task as done or undone.

- **Delete a Task**:
  - Click the delete button (trash icon) to remove the task.

## Code Overview

- **HTML**: The structure of the application including the header, task list, and buttons.
- **CSS**: The styling for the application, including layout, colors, and responsive design.
- **JavaScript**: The functionality for adding, editing, deleting, and toggling tasks. It also handles loading and saving tasks to local storage.

### JavaScript Functions

- `loadTasks()`: Loads tasks from local storage.
- `saveTasks()`: Saves tasks to local storage.
- `displayTasks()`: Renders the tasks on the page.
- `addTask()`: Prompts the user to add a new task.
- `deleteTask(index)`: Removes a task by index.
- `doneTask(index)`: Toggles the completion status of a task.
- `editTask(index)`: Prompts the user to edit a task.

## Technologies Used

- **HTML**: Markup language for structuring the application.
- **CSS**: Styling language for design and layout.
- **JavaScript**: Programming language for adding interactivity.

