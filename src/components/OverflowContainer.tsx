import { Box } from "./Box";

interface OverflowContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const OverflowContainer = ({ children, style }: OverflowContainerProps) => {
  return <Box style={{ ...style, width: 1000, height: 800, margin: "auto", overflowY: "auto" }}>{children}</Box>;
};

export const SimpleOverflowContainer = ({ children }: OverflowContainerProps) => {
  return (
    <OverflowContainer
      style={{
        background: `
          /* Shadow Cover TOP */
          linear-gradient(
            white 30%,
            rgba(255, 255, 255, 0)
          ) center top,
          
          /* Shadow Cover BOTTOM */
          linear-gradient(
            rgba(255, 255, 255, 0), 
            white 70%
          ) center bottom,
          
          /* Shadow TOP */
          radial-gradient(
            farthest-side at 50% 0,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0)
          ) center top,
          
          /* Shadow BOTTOM */
          radial-gradient(
            farthest-side at 50% 100%,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0)
          ) center bottom`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
        backgroundAttachment: "local, local, scroll, scroll",
      }}
    >
      {children}
    </OverflowContainer>
  );
};
