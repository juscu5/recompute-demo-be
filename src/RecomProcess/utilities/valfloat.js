const valFloat = (str) => {
  console.log("Converting into Float: ", str);
  try {
    const parseString = parseFloat(str.toString().replace(/,/g, ""));
    return isNaN(parseString) ? 0 : parseString;
  } catch (e) {
    console.log("There's an error while convering to float ", str, e);
  }
};

module.exports = {
  valFloat,
};
