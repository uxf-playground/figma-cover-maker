export const calculateYYQQ = (): string => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const quarter = Math.floor((currentDate.getMonth() + 3) / 3);
    return `${year}Q${quarter}`;
  };