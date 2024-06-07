# To-Do List App

This is a simple To-Do List application built with React. It allows users to add tasks, edit tasks, delete tasks, and mark tasks as completed. This application is a great starting point for learning React and managing state with hooks.

## Features

1. **Add Task**: Users can add a new task to the list.
2. **Edit Task**: Users can edit the text of an existing task.
3. **Delete Task**: Users can delete a task from the list.
4. **Complete Task**: Users can mark a task as completed or uncompleted.

## Code Overview

### Components

- **ToDoList**: The main component that contains the logic and UI for the to-do list.

### State Variables

- `tasks`: An array of task objects, each with `text` and `completed` properties.
- `newTask`: A string that holds the value of the new task to be added or the text of the task being edited.
- `editIndex`: A number that holds the index of the task currently being edited. If no task is being edited, it is `null`.

### Functions

- **handleInputChange**: Updates the `newTask` state when the input field changes.
- **addTask**: Adds a new task to the list if the input field is not empty.
- **deleteTask**: Deletes a task from the list based on its index.
- **editTask**: Sets the task text to be edited and its index.
- **saveTask**: Saves the edited task text back to the list.
- **toggleCompleteTask**: Toggles the `completed` state of a task.

### JSX Structure

- An input field for entering new tasks.
- A button that either adds a new task or saves an edited task.
- An ordered list (`<ol>`) that displays all tasks with checkboxes, edit buttons, and delete buttons.

## Usage

1. **Adding a Task**:
   - Type a task into the input field.
   - Click the "Add" button to add the task to the list.

2. **Editing a Task**:
   - Click the "Edit" button next to the task you want to edit.
   - The task text will appear in the input field.
   - Edit the text and click the "Save" button to save changes.

3. **Deleting a Task**:
   - Click the "Delete" button next to the task you want to delete.

4. **Completing a Task**:
   - Click the checkbox next to a task to mark it as completed.
   - Click again to unmark it.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

