// import Welcome from './Components/Welcome.js'
// import Hello from './Components/Hello.js'


// function App(params) {
//   return(
//     <div>
//       <Welcome name = "yang paling ganteng!"></Welcome>
//       <Welcome name = "yang paling Keren!"></Welcome>

//       <Hello name="Hatory" sifat="Baik Hati" wilayah="Jagat Raya" jumlah="1000"></Hello>
//     </div>
//   )
// }

// import Comment from './Components/Comment.js'

// const komentar = {
//   text: 'This is my commentar',
//   date: new Date(),
//   author:{
//     avatarUrl: "https://via.placeholder.com/60",
//     name: "Hatory"
//   }
// };

// function App() {
//   return(
// //     <div>
// //       <Comment text={komentar.text} date={komentar.date} author={komentar.author} />
// //     </div>
// //   )
// // }

// /////////////////////////////
// ///

// import HomePage from './pages/Header';
// import EmployeePage from './pages/EmployeePage';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   return(
//     <Router>
//       <div>
//         {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/employee" component={EmployeePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// import ExampleStateHook from './Components/ExampleStateHook';
// import Counter from './Components/Counter';
// import Penghitung from './Components/Penghitung';
// import Message from './Components/Message';
// import UseReducer from './Components/UseReducer';
// import Todos from "./Components/Todos";

// function App() {
//     return(
//      <div>
//          {/* <h1>React Hook: useState</h1>
//          <ExampleStateHook startValue={0} namaUser="Fitriani" /> 
//         <Counter /> */}

//         {/* <Penghitung/>
//         <Message/> */}
//         {/* <UseReducer/> */}
//         <Todos/>
//      </div>
      
//     );
// }
// export default App;

// import React, { useState, useMemo } from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import { UserContext } from './UserContext';

// function App()  {
//   const [ user, setUser ] = useState('Guest');

//   const userValueProvider = useMemo(() => ({user, setUser}), [user, setUser]);

//   return(
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <UserContext.Provider value={userValueProvider}>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </UserContext.Provider>
//     </div>
//   );
// }


import Todos from "./Components/Assignment/TodoApp";

function App() {
    return(
     <div>       
        <Todos/>
     </div>
      
    );
}
export default App;