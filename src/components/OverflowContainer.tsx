import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, BoxProps } from "./Box";

const OverflowContainer = ({ style, ...props }: BoxProps) => {
  return <Box style={{ ...style, width: 800, height: 800, overflowY: "auto" }} {...props} />;
};

export const SimpleOverflowContainer = ({ style, ...props }: BoxProps) => {
  return (
    <OverflowContainer
      style={{
        ...style,
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
      {...props}
    />
  );
};

export const ScrollOverflowContainer = ({ onScroll, ...props }: BoxProps) => {
  const [scrollPosition, setScrollPosition] = useState<"top" | "middle" | "bottom">("top");

  function handleOnScroll(event: React.UIEvent<HTMLDivElement>) {
    const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
    const scrollBottom = scrollHeight - clientHeight - scrollTop;

    if (scrollTop === 0) {
      setScrollPosition("top");
    } else if (scrollBottom === 0) {
      setScrollPosition("bottom");
    } else {
      setScrollPosition("middle");
    }
  }

  return (
    <Box style={{ position: "relative" }}>
      <Box
        style={{
          display: scrollPosition === "top" ? "none" : "block",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "60px",
          background: "linear-gradient(to top, transparent, white)",
        }}
      />
      <OverflowContainer {...props} onScroll={handleOnScroll} />
      <Box
        style={{
          display: scrollPosition === "bottom" ? "none" : "block",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60px",
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      />
    </Box>
  );
};

export const IntersectionOverflowContainer = ({ children, ...props }: BoxProps) => {
  const { ref: topEdgeRef, inView: topEdgeInView } = useInView({
    threshold: 0,
  });
  const { ref: bottomEdgeRef, inView: bottomEdgeInView } = useInView({
    threshold: 0,
  });

  return (
    <Box style={{ position: "relative" }}>
      <Box
        style={{
          display: topEdgeInView ? "none" : "block",
          position: "absolute",
          top: 0,
          height: "60px",
          width: "100%",
          background: "linear-gradient(to top, transparent, white)",
        }}
      />
      <OverflowContainer {...props}>
        <Box ref={topEdgeRef} />
        {children}
        <Box ref={bottomEdgeRef} />
      </OverflowContainer>
      <Box
        style={{
          display: bottomEdgeInView ? "none" : "block",
          position: "absolute",
          bottom: 0,
          height: "60px",
          width: "100%",
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      />
    </Box>
  );
};
