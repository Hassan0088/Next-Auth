import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Main from "./Main";
function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  
  return (
    <SessionProvider session={pageProps.session}  refetchInterval={5 * 60}
  
    refetchOnWindowFocus={true}>
      <Main/>
     
        <Component {...pageProps} />
      
    </SessionProvider>
  );
}

export default MyApp;
