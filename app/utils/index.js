export const dateFormat = (utcDate) => {
  const date = new Date(utcDate);
  return date.toLocaleString();
};
