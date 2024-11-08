import React, { createContext, useState } from "react";
import AnimatedLogo from "../components/AnimatedLogo";

export const PageViewContext = createContext({ hasViewed: false });

export const PageViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasViewed, setHasViewed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setHasViewed(true);
  };

  return (
    <PageViewContext.Provider value={{ hasViewed }}>
      {!hasViewed ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <AnimatedLogo setLoading={setIsLoading} />
          <button
            onClick={handleButtonClick}
            disabled={!isLoading}
            style={{
              padding: "10px 20px",
              fontSize: "3vw",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              backgroundColor: "transparent",
              opacity: isLoading ? 1 : 0,
            }}
          >
            ENTRAR
          </button>
        </div>
      ) : (
        children
      )}
    </PageViewContext.Provider>
  );
};
