const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Sum must take two numbers");
  }
  return a + b;
};

export default sum;
