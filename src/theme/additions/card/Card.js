const Card = {
  baseStyle: {
    p: "22px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxShadow: "0px 5px 14px rgba(0, 0, 0, 0.05)",
    borderRadius: "20px",
    position: "relative",
    wordWrap: "break-word",
    backgroundClip: "border-box",
  },
  variants: {
    panel: () => ({
      bg: "#111C44",
    }),
  },
  defaultProps: {
    variant: "panel",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
