import { Provider } from "react-redux";
import { store } from "~/store";
import { AuthMiddleware } from "~/middleware/auth";
import "~/styles/tailwind.css";
import "~/styles/index.css";
import "~/styles/tailwind-utils.css";
import "@fontsource/inter";
import { ThemeProvider } from "next-themes";

/** @param {import("next/app").AppProps} props */
export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AuthMiddleware>
            <Component {...pageProps} />
          </AuthMiddleware>
        </ThemeProvider>
      </Provider>
    </>
  );
}