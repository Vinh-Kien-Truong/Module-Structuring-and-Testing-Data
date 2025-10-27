function getOrdinalNumber(num) {
  const absLastTwo = Math.abs(num) % 100;
  if (absLastTwo >= 11 && absLastTwo <= 13) return `${num}th`;
  switch (absLastTwo % 10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
module.exports = getOrdinalNumber;
