export const orders = [
  {
    id: 1,
    title:
      "Комплект поставки современной компьютерной техники: ноутбук с процессором Intel Core i9, монитор 4K UHD с поддержкой HDR, беспроводные клавиатуру и мышь, многофункциональный принтер с Wi-Fi модулем, а также блок бесперебойного питания с увеличенным временем автономной работы.",
    date: "2017-07-09 12:09:33",
    description: "desc",
  },
  {
    id: 2,
    title:
      "Комплект поставки профессионального оборудования:стационарный компьютер с процессором AMD Ryzen 9, два монитора Full HD для многозадачности, механическую клавиатуру с RGB-подсветкой, эргономичную мышь, лазерный принтер с поддержкой двусторонней печати и внешнее хранилище на 4 ТБ для резервного копирования данных.",
    date: "2017-08-15 12:09:33",
    description: "maus",
  },
  {
    id: 3,
    title:
      "Поставка офисной техники: ультратонкий ноутбук с процессором Intel Core i7, монитор с матовым экраном диагональю 27 дюймов, комплект периферийных устройств (беспроводные мышь и клавиатура), скоростной сканер документов, проектор с поддержкой 4K разрешения и портативную зарядную станцию для работы в полевых условиях.",
    date: "2017-09-29 12:09:33",
    description: "phone",
  },
];
export const products = [
  {
    id: 1,
    serialNumber: "SN-12.444864476",
    isNew: 1,
    photo: "./icons/460292406.webp",
    title:
      "Lenovo Legion 5 Pro 16IAH7H i7-12700H / 16GB / 512GB / RTX 3070 / 16",
    type: "Laptop",
    specification: "Intel Core i9, 16GB RAM, 1TB SSD",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 2000, symbol: "USD", isDefault: 0 },
      { value: 52000, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },
  {
    id: 2,
    serialNumber: "SN-12.444864555",
    isNew: 1,
    photo: "monitor.jpg",
    title: "Монітор 32 Gigabyte M32UC UHD VA 144Hz (M32UC-EK)",
    type: "Monitor",
    specification: "27-inch, HDR, 3840x2160",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 500, symbol: "USD", isDefault: 0 },
      { value: 13000, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },
  {
    id: 3,
    serialNumber: "SN-12.444864257",
    isNew: 1,
    photo: "keyboard.jpg",
    title:
      "Клавіатура бездротова Logitech G PRO X TKL Lightspeed White Tactile (920-012148)",
    type: "Keyboard",
    specification: "Wireless, ergonomic design",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },
  {
    id: 4,
    serialNumber: "SN-12.444864168",
    isNew: 1,
    photo: "mouse.jpg",
    title: "Миша Lenovo Legion M600s Wireless Gaming Mouse Grey (GY51H47354)",
    type: "Mouse",
    specification: "Wireless, optical sensor",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 50, symbol: "USD", isDefault: 0 },
      { value: 1300, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },
  {
    id: 5,
    serialNumber: 1005,
    isNew: 1,
    photo: "printer.jpg",
    title: "Multifunction Printer",
    type: "Printer",
    specification: "Wi-Fi, duplex printing",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 300, symbol: "USD", isDefault: 0 },
      { value: 7800, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },
  {
    id: 6,
    serialNumber: 1006,
    isNew: 1,
    photo: "ups.jpg",
    title: "Uninterruptible Power Supply",
    type: "UPS",
    specification: "Extended battery life, surge protection",
    guarantee: {
      start: "2017-07-10 12:09:33",
      end: "2019-07-10 12:09:33",
    },
    price: [
      { value: 400, symbol: "USD", isDefault: 0 },
      { value: 10400, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-07-09 12:09:33",
  },

  {
    id: 7,
    serialNumber: 2001,
    isNew: 1,
    photo: "desktop.jpg",
    title: "Professional Desktop",
    type: "Desktop",
    specification: "AMD Ryzen 9, 32GB RAM, 2TB SSD",
    guarantee: {
      start: "2017-08-16 12:09:33",
      end: "2020-08-16 12:09:33",
    },
    price: [
      { value: 2500, symbol: "USD", isDefault: 0 },
      { value: 65000, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-08-15 12:09:33",
  },
  {
    id: 8,
    serialNumber: 2002,
    isNew: 1,
    photo: "monitor.jpg",
    title: "Full HD Monitor",
    type: "Monitor",
    specification: "24-inch, 1920x1080",
    guarantee: {
      start: "2017-08-16 12:09:33",
      end: "2020-08-16 12:09:33",
    },
    price: [
      { value: 200, symbol: "USD", isDefault: 0 },
      { value: 5200, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-08-15 12:09:33",
  },
];
