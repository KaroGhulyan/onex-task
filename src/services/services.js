export const generateItems = (amount) => {
  const arr = Array.from(Array(amount));
  return arr.map((number, i) => ({
    id: i,
    name: `Name ${i + 1}`,
    type: `Item Type ${i + 1}`,
  }));
};
