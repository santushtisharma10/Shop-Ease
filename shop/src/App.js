import './App.css';
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import Login from "./Login"
function App() {
  return (
    <div className="App">
{/*Create a Login Page */}
      <Login />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
