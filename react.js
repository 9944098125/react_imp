const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const react_qa = [
  {
    id: 1,
    question: "What is react ?",
    answer:
      "React js is free, open-source front-end javascript library, that helps to build userInterface components. It is maintained by facebook, a large community of individual developers, and some companies from 2011. React  can be used as a base for the development of single page and mobile applications.",
  },
  {
    id: 2,
    question: "Why react js ?",
    answer:
      "React js provides graceful solutions to the front end programming's most persistent issues, allowing us to develop dynamic and interavtive apps with ease. It's fast, easy, flexible, scalable, powerful, and has a robust developer's community that's rapidly growing.",
  },
  {
    id: 3,
    question: "What are class components ?",
    answer:
      "Class components are the bread and butter of the most modern web apps built in react js. All the class components are the child classes of the component class of the react js. All class components are made up of multple functions that add functionalities to the application.",
  },
  {
    id: 4,
    question: "What is DOM ?",
    answer:
      "DOM - Document object Model, is the programming api for html and xml documents. They define the logical structure of the documents. It shows a way to access and manipulate these documents.",
  },
  {
    id: 5,
    question:
      "What is the difference between functional components and class components ?",
    answer:
      "Functional components: These functional components are the plain javascript functions that accept props as an argument. They don't use life cycle methods like- component did mount, component will unmount, etc... But after the entry of react hooks it uses life cycle methods in the name of useEffect() and it refers to the state in the name of useState(). Class components: In class components we are required to extend from the component and create a render function to return the jsx to the web page.",
  },
  {
    id: 6,
    question: "What are the life cycle methods ?",
    answer: "Life cycle method is the birth, update and death of a component. There are four types of life cycle methods - Initialization- It's the stage where component gets the birth with the default state and given props. Mounting - It's the stage where the component triggers the render method and returns jsx to the web page. Udating - It's the stage where component gets updated and the whole app gets repainted. Unmounting - It's the stage where component gets removed from the app.",
  },
  {
    id: 7,
    question: "What is Strict mode ?",
    answer: "Strict mode is the tool for highlighting the potential problems of the application. Like Strict mode, Fragment doesn't render any visible ui. It activates the additional checks and warnings for it's descandants.",
  },
  {
    id: 8,
    question: "Define Props and State.",
    answer: "Props - Props is generally used to pass the data from parent class to child class. The data in the props is read only. Generally props are declared in the parent component and defined/designed in the child component.  State - State is a JS object that holds some information for the lifetime of the component. Whenever the state gets changed in the app, by-default the component and it's child component gets re-rendered.",
  },
  {
    id: 9,
    question: "When does react decide to re-render ?",
    answer: "Whenever the data in the app gets updated, by-default the component and the child component gets re-rendered.",
  },
  {
    id: 10,
    question: "Ways to style a react document.",
    answer: "1. Inline CSS 2. CSS in JS 3. Styled Componens 4. SASS and SCSS 5. LESS 6. Stylable etc...",
  },
  {
    id: 11,
    question: "What is KEY ?",
    answer: "KEY is string attribute that gives identity to the element of a list. If an item gets updated or deleted in a list react gets to know that with this KEY attribute. Generally they are like attributes for the child components in the parent component.",
  },
  {
    id: 12,
    question: "Explain Prop drilling.",
    answer: "Prop drilling is the situation where the same data is being sent at eveery level due to the requirement of the final level. Simply the data needed to be sent from parent class to child class is called prop drilling.",
  },
  {
    id: 13,
    question: "What are the advantages of the react ?",
    answer: "Basically, the first advantage is that react uses virtual dom for rendering the view. Whenever the data gets changed in the react app, a new virtual dom gets created and creating a new virtual dom is more easier and faster than rendering the UI from the browser. THerefore using the virtual dom improves the efficiency of the app.  Then It uses component based architecture so that same components are used for various apps that have the similar functionalities.  Then it has huge ecosystem of library so that we can have various packages for a task and we can select the best out of them. Then react apps are SEO friendly and helps developers to develop the apps that are navigated from any search engines. And then at last It has gentle learning curve and anyone with a little knowledge of javascript can happily code in react.",
  },
  {
    id: 14,
    question: "What are controlled and uncontrolled components ?",
    answer: "Controlled components - In controlled components the value of the input elements are in the hands of react. When a user enters data in the input elements of a controlled component onChange function gets triggered and the value of the input elements gets re-rendered with the new values.  Uncontrolled components - In uncontrolled components the value of the input elements are in the hands of DOM itself. When a user enters data in the input elements of uncontrolled components no functions or  no callback functions gets triggered. It behaves like normal html form elements. ",
  },
  {
    id: 15,
    question: "What is the real dom ?",
    answer: "1. Real dom updates slower. 2. whenever the data gets updated, a new dom gets created. 3. DOM manipulation is very expensive. 4. It updates the html directly.",
  },
  {
    id: 16,
    question: "Features of Virtual dom.",
    answer: "1. Virtual dom updates faster. 2. whenever the data gets updated, only the element gets re-rendered. 3. DOM manipulation is very easy. 5. It can't update the html directly.",
  },
  {
    id: 17,
    question: "Features of react.",
    answer: "It is a frontend javascript library that is developed by facebook in 2011. It follows the component based architecture. It helps in developing web apps and UI. It uses virtual dom instead of real dom. It uses server-side rendering. It follows uni-directional data-flow. ",
  },
  {
    id: 18,
    question: "What is virtual dom ?",
    answer: "Virtual dom is the virtual representation of the real dom. Each time the data gets changed in the react app, a new virtual dom gets created. Creating a new birtual dom is more easier and faster than rendering the UI from the browser. Therefore using virtual dom makes the app more effecient.",
  },
  {
    id: 19,
    question: "Why browser can't read jsx ?",
    answer: "Browser reads only normal javascript object and jsx is not a normal javascript object. So for the browser to read jsx there are transformers like babelscript etc... So it converts the jsx to normal javascript objects and passes it to the browser.",
  },
  {
    id: 20,
    question: "What are higher order components ?",
    answer: "They are the advanced way of reusing the component logic. They can wrap the child components in it and they accept the dynamically provided child components.",
  },
  {
    id: 21,
    question: "What are Pure components ?",
    answer: "They are the simplest and fastest way to create a component. They can replace any component with only the render method. They should be used over normal components because they use SHOULD COMPONENT UPDATE life cycle method.",
  },
  {
    id: 22,
    question: "Explain render method.",
    answer: "This render method is generally used in class components.Without that we can't return the data to the web page. Whenever the data gets changed in the react app, the whole component and it's child component gets re-rendered and the data gets updated in the web page.",
  },
  {
    id: 23,
    question: "How do we optimize performance in react ?",
    answer: "Generally to optimize the performance of the app we use production build. If you are benchmarking or experiencing any performance issues in your react app, make sure you are testing with minified production build. By default there are many helpful warnings in react, but however they make react larger and slower. So make sure you use the production build while deploying the app.",
  },
  {
    id: 24,
    question: "What is production build ?",
    answer: "Production build creates minified bundles, lighter-weight source maps and optimized assets. This improves the load time. Generally to start the production build we use the command 'npm run build'. In production build you javascript and css files are inside a static directory. It build uglify and your source files into one or more minimized files",
  },
  {
    id: 25,
    question: "What is development build ?",
    answer: "As the name suggests it refers to development purposes. You have source maps, debugging and even hot reloading.",
  },
];

app.get('/react', (request, response) => {
    response.send(react_qa);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App is running at ${port}`));
