const sortTextSplit = (sort) => {
  console.log("Sort Text Splitting: ", sort);
  try {
    const textSplit = sort.split(",").map((s) => s.trim().split(" "));
    return textSplit;
  } catch (e) {
    console.log("There's an error while TextSpli. ", sort, e);
  }
};

module.exports = {
  sortTextSplit,
};
