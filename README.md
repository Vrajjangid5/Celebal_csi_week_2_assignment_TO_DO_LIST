# React To-Do List Application

This is a simple To-Do List application built with React that allows users to add, remove, and mark tasks as completed. It also includes local storage integration to persist tasks across page reloads.

## Features

- Add new tasks with a title and description.
- Remove tasks.
- Mark tasks as completed.
- View separate lists for pending and completed tasks.
- Persistent storage using local storage.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your local machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list

### Running the Application
To start the application in development mode, run:
npm start


### Project Structure
todo-list/
├── public/
│   ├── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md


App.js
The main component of the application. It contains the logic for adding, deleting, and marking tasks as completed. It also handles local storage integration to persist the tasks.

App.css
Contains the styles for the application.

index.js
The entry point of the React application, which renders the App component.

## Local Storage Integration
The application uses local storage to save the tasks so that they persist across page reloads. The following keys are used:

todolist: Stores the list of pending tasks.
completedTodos: Stores the list of completed tasks.


### How It Works
When the application loads, it retrieves the tasks from local storage and populates the state.
When a new task is added, the updated list of tasks is saved to local storage.
When a task is deleted or marked as completed, the updated lists are saved to local storage.


### Functionality

## Adding a Task
Enter the title and description in the input fields.
Click the Add button to add the task to the list.
The input fields will be cleared after adding the task.


## Deleting a Task
Click the delete icon (🗑️) next to the task you want to remove.
The task will be removed from the list and local storage will be updated.


## Marking a Task as Completed
Click the check icon (✔️) next to the task you want to mark as completed.
The task will be moved to the completed list and local storage will be updated.


## Viewing Completed Tasks
Click the Completed button to switch to the completed tasks view.
Click the Todo button to switch back to the pending tasks view.