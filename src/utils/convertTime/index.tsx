export function convertTime(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  return `${hours}:${minutes.substr(-2)}`;
}
