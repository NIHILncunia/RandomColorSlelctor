const getColors = () => {
  const redHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0).toUpperCase();
  const greenHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0).toUpperCase();
  const blueHex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0).toUpperCase();

  return `${redHex}${greenHex}${blueHex}`;
};

export default getColors;