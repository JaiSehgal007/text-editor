// PHASE 1

// import logo from './logo.svg';
// import './App.css';

// //this is function based component, earlier className based components were used
// function App() {
//   // all the statement inside the return is called jsx
//   // in jsx we write html and javascript at a combined place
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React With Me
//         </a>
//       </header>
//     </div>
//     //just htmlFor,tabIndex,className is reserved so we use classNameName here
//     // in react if we are using jsx then we can return only one lemenet here it is div
//     //if we want to return multiple the used <> </> to wrap
//   );
// }

// export default App;

// PHASE 2

// import logo from './logo.svg';
// import './App.css';

// let name ="JAI";

// // if i am writing 
// // let name ="<b>JAI</b>"
// //then it will be rendered as it is this is a safety feature

// function App() {
//   return (
//     <>
//     <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>
//     <div classNameName="container">
//       <h1>Hello {name}</h1>
//       {/* <Navbar/> this is the way to include components we must use "/" in any empty tag */}
//       {/* nor here the part of code inside the curly braces is trated as javascript  */}
//       <p>Lorem ipsum dolor sit amet consectetur 
//         adipisicing elit. Deleniti nihil eum illum 
//         aperiam doloremque delectus voluptatibus 
//         dolorum officia! Ex voluptas, magni, esse 
//         eaque sequi voluptatem iste impedit fuga 
//         provident omnis, totam molestiae natus earum?
//       </p>
//     </div>
//     <div classNameName="blank">lovely</div>
//     </>
//   );
// }

// export default App;

//single page application -> bundles and send all the data at a single point,data transportaion become less
//multipage application ->everytime we open a new tab a req for html css and javascript is again created using lots of bandwidth

// npx create-react-app my-app 
// this is the basic syntax of tcreating the folderstructure through the commandline



import './App.css';
import Navbar from './components/navbar';
import Form from './components/form'
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light'); //weather dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
       setmode('light');
       document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Form mode={mode}/>
      </div>
    </>
  );
}

export default App;