const GREY = {
  0: "#FFFFFF",
  100: "#F0F0F3",
  200: "#9E9E9E",
  300: "#6B818C",
  400: "#4B5E62",
  500: "#333333",
};

const PRIMARY = {
  main: "#017971",
};

const palette = {
  primary: { ...PRIMARY },
  textMain: {
    main: "#333333",
  },
  grey: GREY,
  text: {
    primary: GREY[500],
  },
  AI: {
    main: "#E800FF",
    secondary: "#21617E",
    tertiary: "#017971",
    gradient: "linear-gradient(150deg, #E800FF 0%, #21617E 85%, #00534E 100%)",
  },
};

export const USECSVTHEME = {
  global: {
    backgroundColor: "#FFFFFF",
    primaryTextColor: "#017971",
    secondaryTextColor: "#333333",
    successColor: "#38A169",
    warningColor: "#C53030",
  },
  buttons: {
    primary: {
      color: "#ffffff",
      backgroundColor: "#017971",
      border: "none",
      borderRadius: "0.375rem",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ":hover": {
        backgroundColor: "#00534E",
        color: "#FFFFFF",
      },
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      color: "#214464",
      border: "1px solid #EDF2F7",
      borderRadius: "0.375rem",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ":hover": {
        backgroundColor: "#F7FAFC",
        color: "#214464",
      },
    },
  },
};

export default palette;
