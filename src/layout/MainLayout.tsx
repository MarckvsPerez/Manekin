import { type ReactNode } from "react";
import { FullWidthDiv } from "./FullWidth.styled";

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <FullWidthDiv>{children}</FullWidthDiv>
    </div>
  );
};
