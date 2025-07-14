import {useFormStatus} from 'react-dom'

function APP(){

  const handleSubmit=async ()=>{
    await new Promise(res=>setTimeout(res,3000));
  }

  function CustomerForm(){

    const {pending}=useFormStatus();

    return (

    <div>
      <input type="text" placeholder='Enter Your Name' />
      <br />
      <br />
      <input type="password" placeholder='Enter Your Password' />
    <br />
    <br />
    <button disabled={pending}>{pending?'Submiting..':'Submit'}</button>

    </div>

  )
    

  }

  return(

    <div>

      <h1>useFormStatus HOOK in React JS 19</h1>

      <form action={handleSubmit}>
    <CustomerForm/>
      </form>
    </div>
  )
  
}

export default APP