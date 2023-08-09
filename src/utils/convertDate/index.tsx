export function convertDate(date: number) {
  const dateObj = new Date(date * 1000);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}.${month < 10 ? '0' + month : month}.${year}`;
}
