import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Main = () => {
  const { data: session, status } = useSession();
  const signout = () => {
    signOut({ redirect: false, callbackUrl: "/Login" });
  };

  if (status === "loading") {
    return <div className="spinner-container">
    <div className="loading-spinner">
    </div>
  </div>;
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="parent-nav">
      <Container className="child-nav">
        <Navbar.Brand href="#home">TechProject</Navbar.Brand>
        <Nav>
          <Link
            href="/"
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            <button className="nav">Home</button>
          </Link>
          <Link
            href="/Sell"
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            <button className="nav">Sell Your Car</button>
          </Link>
          <Link
            href="/Listing"
            prefetch={false}
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            <button className="nav">All Listing</button>
          </Link>
          {session && (
            <Link
              href="/MyListing"
              passHref
              prefetch={false}
              style={{
                textDecoration: "none",
              }}
            >
              <button className="nav">MyListing</button>
            </Link>
          )}
        </Nav>
      </Container>
      {!session && (
        <>
          <Link
            className="log"
            href="/Login"
            prefetch={false}
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            Login
          </Link>
          <Link
            className="log"
            href="/Signup"
            prefetch={false}
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            Sign-Up
          </Link>
        </>
      )}
      {session && (
        <button className="nav-button" onClick={() => signout()}>
          Logout
        </button>
      )}
    </Navbar>
  );
};

export default Main;
