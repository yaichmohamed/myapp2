import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profilephoto from './component/profile/Profilephoto';
import Fullname from './component/profile/Fullname';
import Address from './component/profile/Address';
function App() {
  return (
   <>
   <Profilephoto/>
   <Fullname/>
 <Address/>
   </>
  );
}

export default App;
