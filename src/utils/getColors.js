const getColors = () => {
  const redHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0);
  const greenHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0);
  const blueHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0);

  return `${redHex}${greenHex}${blueHex}`;
};

export default getColors;