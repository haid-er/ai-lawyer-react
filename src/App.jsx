import { useRoutes } from "react-router";
import routes from "./routes"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const applicationRoutes = useRoutes(routes)
  return (
    <>
      <ToastContainer autoClose={5000} />
      {applicationRoutes}
    </>
  )
}

export default App;
