import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import AllRoutes from './routes/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer position="top-center"/>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
