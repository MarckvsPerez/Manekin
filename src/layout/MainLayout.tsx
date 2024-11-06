import { type ReactNode } from "react";
import { FullWidthDiv } from "./FullWidth.styled";
import { Footer } from "../components/Footer";

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <FullWidthDiv>{children}</FullWidthDiv>
      <Footer />
    </div>
  );
};
