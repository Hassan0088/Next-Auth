import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Main from "./Main";
function MyApp({ Component, pageProps:{session, ...pageProps} }) {
<<<<<<< HEAD
  
  return (
    <SessionProvider session={pageProps.session}  refetchInterval={5 * 60}
  
    refetchOnWindowFocus={true}>
=======
  const protectedRoutes = ["/Listing"];
  return (
    <SessionProvider session={pageProps.session}>
>>>>>>> origin/main
      <Main/>
     
        <Component {...pageProps} />
      
    </SessionProvider>
  );
}

export default MyApp;
