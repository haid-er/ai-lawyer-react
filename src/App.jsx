import { useRoutes } from "react-router";
import routes from "./routes"
function App() {
  const applicationRoutes = useRoutes(routes)
  return (
    <>
      {applicationRoutes}
    </>
  )
}

export default App;
