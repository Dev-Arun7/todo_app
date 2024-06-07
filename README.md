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



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
