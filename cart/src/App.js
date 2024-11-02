import { useGlobalContext } from "./Context/Context";
import "./App.css";
import CartContainer from "./Compontents/CartContainer";
import Navbar from "./Compontents/Navbar";

function App() {
 const {loading} = useGlobalContext()
 if(loading){
  return(
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
 }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
