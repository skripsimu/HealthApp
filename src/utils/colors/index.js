const mainColors = {
  green1: "#0BCAD4",
  green2: "#EDFCFD",
  dark1: "#112340",
  dark2: "#495A75",
  grey1: "#7D8797",
  grey2: "#E9E9E9",
  grey3: "#EEEEEE",
  grey4: "#EDEEF0",
  blue1: "#0066CB",
};


export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: "white",
  black: "black",
  border: {
    primary: mainColors.grey2,
    secondary: mainColors.grey3,
  },
  text: {
    default: mainColors.dark1,
    secondary: mainColors.grey1,
    inactive: mainColors.dark2,
    active: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: "white",
    },
    secondary: {
      background: "white",
      text: mainColors.dark1,
    },
    active: {
      background: mainColors.blue1,
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.dark1,
    },
  },
  cardLight: mainColors.green2,
};