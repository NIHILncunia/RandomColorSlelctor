const getContrast = (hexcolor) => {
	const r = parseInt(hexcolor.substr(0, 2), 16);
	const g = parseInt(hexcolor.substr(2, 2), 16);
	const b = parseInt(hexcolor.substr(4, 2), 16);
  const contrast = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
	return (contrast >= 128) ? '#000000' : '#FFFFFF';
};

export default getContrast;