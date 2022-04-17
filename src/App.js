import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
 
//     <Static/>

//     </div>
//   );
// }

// function Static(){

//   return (<div className="App">
//   <div>
//   <h3>Mobile Operating System</h3>
//   <li>Android </li>
//   <li>Blackberry </li>
//   <li>iPhone</li>
//   <li>Windows Phone</li>
//   </div>
//   <div>
//   <h3>Mobile Manufacturers</h3>
//   <li>Samsung</li>
//   <li>HTC</li>
//   <li>Micromax</li>
//   <li>Apple</li>
//   </div>

// </div>)

// }

// ======================

function App() {
  const links = ["Services", "Projects", "About"]
  return (
    <div className="App">
     
          <Logo/>

          <div className="links">
          {links.map((e)=>{
                return <Links s={e}/>
          })}
          </div>
         
          <Button/>

    </div> 
  )
};


function Logo(){
  return <h3 className="Logo">Logo Here</h3>
}

function Links({s}){
  return <p>{s}</p>
}

function Button(){
  return <button className="button">Create</button>
}



export default App;
