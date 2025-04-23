# Trello Todo Board

A simple Trello todo board built with **React**, **Redux Toolkit**, and **react-dnd**.

# How to run locally

1. **Clone the repository:**
git clone https://github.com/ayushchauhan248/trello-todo-board.git

2. **Navigate to project:**
cd trello-todo-board

3. **Install all dependencies:**
npm i

4. **Start dev server:**
npm start


**Approach Taken, Improvement and optimization**

React for component-based architecture.

Redux Toolkit to manage the state of todos and perform API operations (CRUD).

react-dnd for intuitive drag-and-drop functionality between different lanes.

axios for HTTP requests to DummyJSON API.

App.css centralized file for all styling, ensuring simple and consistent design.

Todos are categorized into Pending, In Progress, and Completed based on their status.

Used Redux Toolkit createAsyncThunk for clean and scalable API calls.

Global loading state handled in Redux to show loaders while API calls are pending.

Single source of truth for todos inside Redux.

Drag-and-drop behavior implemented using react-dnd for high flexibility.

Minimized re-renders by correctly using React keys.

Proper error handling for API calls (future enhancements: add toast notifications).

Responsive layout for mobile, tablet, and desktop screens.

**Delpoyed Url**
https://ayushchauhan248.github.io/trello-todo-board/
