import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';
import BasicExample from './assets/Navbar';



function App (){


  return(
    <div>
      <BasicExample></BasicExample>
      <button>THIS IS A NORMAL BUTTON</button>
      <br />
      <br />
      { <Button variant="danger">THIS IS A BOOTSTRAP BUTTON</Button>     /* varient basically for default color change */}
      

      <Alert variant='info'>MEWWW</Alert>
       <Alert variant='warning'>MEWWW</Alert>
    </div>
  )
}

export default App