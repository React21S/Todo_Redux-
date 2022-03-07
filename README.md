# Todo App with React redux

![All](/img/All.png)

- This is a todo app and it was built with 
    - React Redux
    - HTML5
    - CSS
 
## In this todo app, 
-   User filled the title and task, then
-   Users click on an add task button to add the task 
-   After added task,
    - Complete button
        - The user clicks on the completed task to strike out the completed task.
    - Delete button
        - The user clicks on the delete button to delete the completed task.
    - User can select option to view each condition such as done, notDone and All .

---

## Selection according to categories
-   Done
    ![Done](/img/Done.png)

 -   NotDone
    ![NotDone](/img/NotDone.png)

-   All
    ![TodoApp](/img/TodoApp.png)

---
## Installation of dependencies packages
```shell
npm install redux
```

```shell
npm install react-redux 
```

```shell
npm install --save @redux-devtools/extension
```

```shell
npm install redux-thunk
```

```shell
npm install json-server --save-dev 
```
### Add this to `package.json`
- under script in `package.json`
`"server":"json-server -p3001 --watch db.json"`

To start server from terminal 
```shell
npm run server
```
For viewing data 
`http://localhost:3001/db`

---
## Installation 
### steps to follow in the installation
1. Write `npm install` on your terminal and press enter (to allow the installation of a packages and it's dependencies to your local node-module folder )
2. Write `npm start` on your terminal and press enter (to start the live server)
    - This start your browser automatically in localhost `localhost:3000`