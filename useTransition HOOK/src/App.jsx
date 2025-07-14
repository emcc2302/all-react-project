import {  useTransition } from "react"

function App(){

const [pending,startTransition]=useTransition();

const handleButton=()=>{

  startTransition(async ()=>{
    await new Promise(res=>setTimeout(res,3000))
  })
}




  return(

    <div>
      <h1>useTransition Hook in React JS 19</h1>
      {
        pending?
        <img style={{width:'100px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAYFBMVEX///9RUVFZWVl1dXWOjo6ampr8/Pzm5ubOzs74+Pjz8/O+vr5OTk7u7u6UlJRVVVXg4ODFxcXU1NTa2tqkpKRvb2+Hh4eqqqo+Pj63t7dGRkZgYGB+fn5lZWVqamosLCzD+U8CAAACFElEQVR4nO3Z6ZKiMBQFYFmykgBhR5F+/7ecBLTG7ka7m3EaYp3vVxCtuoebIMvhAAAAAAAAAAAAAAAAAAAAAAAAAAD/C6/SNt+6iCeoQqWC0WxdxjpUSHEZmi60gszLnuh+iGJO3ZDWmQsSHsnWRa0gSF1HdWRcEnaecoRBs3VVK5gxsupG27Ee5yDKwyCU1NGkcFuxmqdWP+2ThouHP94TSuYcEXdb8qyyLFOxtGPdvHVd13oTpZ87MrBpq4zPp7GaptlwDKxj5UsSMbgkdU/nTVmW+TTslcsRqLDcsrqf0M3pNPYfj7tspoYEQddvUtUqlH3+jNXqEqSiv1/RE8nYn47kxuj7e/1ZI30ax+R+lXLoXI6u3fvM4k1skYXlcUGrTKnT7i+EBYkn/MF3dFHKXytoLZlOOZrdH/Gv0GruSLF1If8sd2uk8edS6r6iIqTd/xr4Bsrun7IAAHZH8Lb38kHcR21KCPH/j/1QuBykfXBH4gkzBan8n1z8VToiU5skTbYu4wlYW5HkBS5+7fmXfTGvhJQvEVQy9hrXx9oF8eqGRejFGSQ86wgtk2T5SZ3Qywl3ivWJTbI4hejeH869YxLnOoeo9mtZ3HgXhOacc58Wxg3tclxfFmpjgxSe9iTnprwu9jmIT0v8lvjbAWFz8N2/SPgOXfDSq3MVAAAAAAAAAAAAAAAAAAAAAAAAAMA6fwDvnRQKCamrFwAAAABJRU5ErkJggg==" alt="" />
        :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  );
}

export default App