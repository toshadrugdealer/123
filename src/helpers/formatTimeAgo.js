export const formatDateAgo = (dateString) => {
  const values = dateString.split(/[^0-9]/);
  const year = parseInt(values[0], 10);
  const month = parseInt(values[1], 10) - 1;
  const day = parseInt(values[2], 10);
  const hours = parseInt(values[3], 10);
  const minutes = parseInt(values[4], 10);
  const seconds = parseInt(values[5], 10);
  const now = new Date();
  const date = new Date(year, month, day, hours, minutes, seconds);
  const secondPast = (now.getTime() - date.getTime()) / 1000;
  if (secondPast < 60) {
    return `${Math.floor(secondPast)}s ago`;
  }
  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)}m ago`;
  }
  if (secondPast <= 86400) {
    return `${Math.floor(secondPast / 3600)}h ago`;
  }
  if (secondPast > 86400) {
    const day = Math.floor(secondPast / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
