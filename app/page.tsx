import {Link} from "@mui/material";

export default function App(){
  return(
  <>
  <div>
    <nav>
      <Link href = {"/login/seller"} className = " relative top-4 left-[79vw] bg-slate-400 px-4 py-2 rounded-[100px]" style = {{color:"black",textDecoration: "none"}}>Log in</Link>
      <Link href = {"/login/customer"} className = "relative top-4 left-[80vw] bg-slate-400 px-4 py-2 rounded-[100px]" style = {{color:"black",textDecoration: "none"}}>Log in</Link>
    </nav>
    <div>
      
    </div>
  </div>
    
  </>
  );
}