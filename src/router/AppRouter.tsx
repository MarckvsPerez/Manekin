import { Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { AboutUsPage } from "../pages/AboutUs";
import { HomePage } from "../pages/Home";
import { ContactPage } from "../pages/Contact";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";

export default function AppRouter(): JSX.Element {
  const location = useLocation();
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          zIndex: 2,
          color: "white",
          mixBlendMode: "difference",
        }}
      >
        <Navbar />
      </div>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </>
  );
}
