🔹Hooks

Hooks are special functions in React that allow developers to use React features like state and lifecycle methods inside functional components, without using class components.


🔹 State

State is a built-in object in React used to store and manage dynamic data in a component.
When the state changes, React automatically re-renders the component to reflect the updated data on the UI.

🔹 useState

useState is a React Hook that allows functional components to have state.

It returns:
The current state value
A function to update the state
It is commonly used for handling form inputs, counters, toggles, and dynamic data.


🔹 Virtual DOM

The Virtual DOM is a lightweight JavaScript representation of the real DOM.
Instead of updating the real DOM directly, React:
Updates the Virtual DOM
Compares it with the previous version
Updates only the changed elements in the real DOM
This improves application performance.


🔹 Diffing Algorithm

The Diffing Algorithm is used by React to compare the old Virtual DOM with the new Virtual DOM.
It identifies:
Which elements have changed
Which elements need to be updated
This helps React minimize DOM operations and improve speed.


🔹 Reconciliation

Reconciliation is the process through which React updates the UI efficiently.
Steps involved:
State or props change
A new Virtual DOM is created
React uses the diffing algorithm to find differences
Only the required updates are applied to the real DOM


🔹 React Workflow

The React rendering workflow follows these steps:
User interacts with the application
State or props are updated
React creates a new Virtual DOM
Diffing algorithm compares old and new Virtual DOM
Reconciliation updates necessary components
Real DOM is updated
UI is re-rendered efficiently