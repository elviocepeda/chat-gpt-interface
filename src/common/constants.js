export const getColors = (theme) => {
  return {
    background: theme
      ? "linear-gradient(#111, #1a1a1a)"
      : "linear-gradient(#8de6f8, #13555f)",
    bgTransparent: theme ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)",
    bgColor: theme ? "#2b2b2b" : "#c5e0e4",
    border: theme ? "#c5e0e4" : "#2b2b2b",
    success: "#42ba96",
    warning: "#FFCC00",
  };
};
