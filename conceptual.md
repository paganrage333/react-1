### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a Javascript library that allows developers to create reusable UI components. One might use React to build single page applications where dynamic user interfaces are required, or when developing larger applications with complex UIs to keep the architecture maintainable. 

- What is Babel?


Babel is a JavaScript compiler that allows developers to write code using the latest JavaScript syntax without worrying about compatibility issues with older browsers or environments that do not support these features natively.

- What is JSX?

JavaScript XML, which is an extension to JavaScript that allows developers to write HTML-like code directly within JavaScript. 

- How is a Component created in React?

In React, a component is created by defining a JavaScript class or function that represents a reusable piece of user interface. Class components must include a render() method. 

- What are some difference between state and props?

State is a built-in feature of React components used to store mutable data that affects a component's behavior and appearance. State is managed internally within the component and can be modified using the setState() method. Props (short for properties) are inputs to a React component. They are passed down from a parent component to a child component and are immutable within the child component.

- What does "downward data flow" refer to in React?

In React, "downward data flow" refers to the principle that data should flow from parent components to child components through the use of props. This means that parent components pass data (as props) down to their child components, which allows child components to render and display the data provided by their parent.

- What is a controlled component?

A controlled component in React is a form element (such as <input>, <textarea>, or <select>) whose value is controlled by React state. In a controlled component, the value of the form element is stored in the component's state and is updated via React state updates rather than the DOM. 

- What is an uncontrolled component?


An uncontrolled component in React is a form element (such as <input>, <textarea>, or <select>) whose value is managed by the DOM itself rather than by React state. Unlike controlled components, where the value is controlled by React state and updated via React, uncontrolled components rely on the browser's native behavior to manage and update their state.

- What is the purpose of the `key` prop when rendering a list of components?

The key prop in React is used to uniquely identify elements in a list of components, optimize reconciliation and rendering performance, preserve component state, and maintain component identity across re-renders.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as a key prop when rendering a list of components is generally considered a poor choice for several reasons: lack of stability, ineffecient updates, limited component reusability, and potential rendering errors. 


- Describe useEffect.  What use cases is it used for in React components?

useEffect is a built-in React Hook that allows functional components to perform side effects in response to certain events during the component's lifecycle. Side effects can include data fetching, subscriptions, manual DOM manipulation, and more. Common use cases include data fetching, subscriptions, DOM manipulation, state synchronization, and cleanup. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?


useRef is a React Hook that returns a mutable ref object whose .current property is initialized to the specified argument (initialValue). The returned object will persist for the full lifetime of the component. Changes to a ref value do not trigger a re-render of a component. The primary purpose of useRef is to provide a stable reference to mutable values that persist between renders without causing the component to re-render. 

- When would you use a ref? When wouldn't you use one?

You would use a ref in React when you need to accomplish tasks that are outside the typical React data flow, such as accessing the DOM directly, storing mutable values that persist between renders, or interacting with third-party libraries that require direct access to DOM elements. You should avoid using refs as a workaround for managing component state or as a way to bypass React's data flow model. Refs should be used judiciously and only when they provide clear benefits for the specific task at hand.

- What is a custom hook in React? When would you want to write one?

A custom hook in React is a JavaScript function that starts with the prefix "use" and encapsulates reusable logic related to React components. Custom hooks allow you to extract and share stateful logic between multiple components without having to resort to higher-order components, render props, or other patterns. You might use a custom hook when reusing logic, abstracting complex behavior, improving code organization, and sharing logic across projects. 
