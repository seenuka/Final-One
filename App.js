import './App.css';
// import Signin from './Starlink/Compo/Webpages/Signin';
// import Homepage from './Starlink/Compo/Webpages/Homepage';
// import Signin from './Starlink/Compo/Webpages/Signin';
// import Home2 from './Starlink/Compo/Webpages/Home2';
// import {Routes,Route} from 'react-router-dom'
import Adminlogin from './Component/Adminlogin'


function App() {
  return (
    <div className="App">
        {/* <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home2' element={<Home2/>}/>
          <Route path='/signin' element={<Signin/>}/>
          
        </Routes> */}
<Adminlogin/>
  
    </div>
  );
}

export default App;
