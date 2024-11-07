import { type ReactNode } from "react";
import { FullWidthDiv } from "./FullWidth.styled";

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <FullWidthDiv>{children}</FullWidthDiv>;
};
