const getDate = (orderDate = new Date(), lg) => {
  const date = new Date(orderDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = new Intl.DateTimeFormat(lg, { month: "short" })
    .format(date)
    .toUpperCase();

  const monthNumber = date.getMonth();
  const year = date.getFullYear();

  return lg === "ru"
    ? `${day} / ${month} / ${year}`
    : lg === `en`
    ? `${day} ${month} , ${year}`
    : `${monthNumber} / 12`;
};

export default getDate;
