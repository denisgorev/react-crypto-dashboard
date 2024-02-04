export const percentDifference = (a, b) => {
  return +((b / a) * 100 - 100).toFixed(2);
};

export const capitilize = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};
