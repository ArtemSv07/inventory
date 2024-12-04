const getDate = (orderDate, fullDate) => {
  const date = new Date(orderDate);
  const day = date.getDate().toString().padStart(2, "0");
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const month = months[date.getMonth()];

  const monthNumber = date.getMonth();
  const year = date.getFullYear();
  return fullDate ? `${day} / ${month} / ${year}` : `${monthNumber} / 12`;
};

export default getDate;
