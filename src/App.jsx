import { useRoutes } from "react-router";
import routes from "./routes"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { meFailure, meRequest } from "./redux/actions/auth.actions";
import { selectMeLoading } from "./redux/selectors/auth.selector";
import Loading from "./components/Loading";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem(import.meta.env.VITE_JWT_TOKEN_NAME)) {
      dispatch(meRequest());
    } else {
      dispatch(meFailure());
    }
  }, []);
  const meLoading = useSelector(selectMeLoading)
  const applicationRoutes = useRoutes(routes)
  if (meLoading) {
    return <Loading />
  }
  else {
    return (
      <>
        <ToastContainer autoClose={5000} />
        {applicationRoutes}
      </>
    )
  }
}

export default App;
