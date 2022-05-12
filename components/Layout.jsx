import { Container } from "@mui/material";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css"
      />
      <title>Calidad App</title>
    </Head>
    <main>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
