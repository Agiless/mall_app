import {Link} from "@mui/material";

export default function App(){
  return(
  <>
    <div>
      <Link href = {"/login/seller"} className = " absolute right-10 bg-slate-400 px-4 py-2 rounded-[100px]" style = {{color:"black",textDecoration: "none"}}>Log in</Link>
      <Link href = "./login/customer" >Log iin</Link>
    </div>
  </>
  );
}