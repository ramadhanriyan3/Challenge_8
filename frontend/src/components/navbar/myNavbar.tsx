"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { css, cx } from "@emotion/css";
import Link from "next/link";

const navItem = css`
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  text-decoration: none;
  background: 0 0;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`;

interface navbarProp {
  children: React.ReactNode;
}

function MyNavbar({ children }: navbarProp) {
  return (
    <>
      <header data-testid="navbar" className="max-width mx-auto">
        <Navbar expand="lg" className="main-bg">
          <Container className="p-0 mx-auto">
            <Navbar.Brand href="#home">
              <Image src="https://i.ibb.co/mDD1YMy/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              style={{ border: "none" }}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbar-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>BCR</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-lg-0 pe-3">
                  <Link
                    className={cx(navItem, "mx-0 mx-lg-3 body-regular")}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={cx(navItem, "mx-0 mx-lg-3 body-regular")}
                    href="/#ourService"
                  >
                    Our Service
                  </Link>
                  <Link
                    className={cx(navItem, "mx-0 mx-lg-3 body-regular")}
                    href="/#whyUs"
                  >
                    Why Us
                  </Link>
                  <Link
                    className={cx(navItem, "mx-0 mx-lg-3 me-lg-4 body-regular")}
                    href="/#faq"
                  >
                    FAQ
                  </Link>
                  {children}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default MyNavbar;
