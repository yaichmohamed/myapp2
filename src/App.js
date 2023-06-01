{/* importation de notre styleSheet de boostrap */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation de nos composants */}
import Profilephoto from './component/profile/Profilephoto';
import Fullname from './component/profile/Fullname';
import Address from './component/profile/Address';
{/* fonction app  */}
function App() {
  return (
   <>
    {/* l'appelation de nos composants */}
   <Profilephoto/>
   <Fullname/>
 <Address/>
   </>
  );
}

export default App;
