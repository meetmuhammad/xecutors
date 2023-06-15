import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../redux/store";
import CookieAccept from "../components/cookies";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../styles/global.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <CookieAccept />
      </Provider>
      <ToastContainer hideProgressBar={true} />
    </>
  );
}

export default MyApp;
