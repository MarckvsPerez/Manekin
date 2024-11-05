import { Route, Routes, useLocation } from "react-router-dom";
import { LayoutProps } from "../interfaces";
import { MainLayout } from "../layout/MainLayout";
import { AboutUsPage } from "../pages/AboutUs";
import { HomePage } from "../pages/Home";
import { ContactPage } from "../pages/Contact";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";

const loadLayout = (
  Layout: React.ComponentType<LayoutProps>,
  Page: React.ComponentType
): JSX.Element => {
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default function AppRouter(): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={loadLayout(MainLayout, HomePage)} />
          <Route path="/about" element={loadLayout(MainLayout, AboutUsPage)} />
          <Route
            path="/contact"
            element={loadLayout(MainLayout, ContactPage)}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
