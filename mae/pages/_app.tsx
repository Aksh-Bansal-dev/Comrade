import "../styles/globals.css";
import {AppProps} from "next/app"
import Theme from "../themes/theme";
import {MuiThemeProvider} from "@material-ui/core";
import {SWRConfig} from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={Theme}>
      <SWRConfig
        value={{
          refreshInterval: 30000,
          fetcher : (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </MuiThemeProvider>
  )
}

export default MyApp;
