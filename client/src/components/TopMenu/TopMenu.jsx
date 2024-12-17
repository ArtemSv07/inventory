// import { useState, useEffect } from "react";
// import css from "./TopMenu.module.css";
// import getDate from "../../utils/getDate";
// import { LuClock8 } from "react-icons/lu";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3001"); // Підключення до сервера

// const TopMenu = () => {
//   const [time, setTime] = useState(new Date());
//   const [activeSessions, setActiveSessions] = useState(0);

//   useEffect(() => {
//     // Таймер для оновлення часу
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Підписка на події Socket.IO
//     socket.on("activeSessions", (count) => {
//       setActiveSessions(count);
//     });

//     // Очищення ресурсів при розмонтуванні
//     return () => {
//       clearInterval(timer);
//       socket.off("activeSessions");
//     };
//   }, []);

//   return (
//     <div className={css.timeContainer}>
//       <ul>
//         <li>
//           <p>Today</p>
//         </li>
//         <li>
//           <p>{getDate(undefined, "en")}</p>
//         </li>
//         <li>
//           <p>Active Sessions: {activeSessions}</p>
//         </li>
//       </ul>
//       <div className={css.onlineTimeContainer}>
//         <LuClock8 color="#5c8e29" />
//         <div>
//           {`${time.getHours().toString().padStart(2, "0")} : ${time
//             .getMinutes()
//             .toString()
//             .padStart(2, "0")}`}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopMenu;

import { useState, useEffect } from "react";
import css from "./TopMenu.module.css";
import getDate from "../../utils/getDate";
import { LuClock8 } from "react-icons/lu";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001"); // Підключення до сервера

const TopMenu = () => {
  const [time, setTime] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    // Таймер для оновлення часу
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Підписка на події Socket.IO
    socket.on("activeSessions", (count) => {
      setActiveSessions(count);
    });

    // Очищення ресурсів при розмонтуванні
    return () => {
      clearInterval(timer);
      socket.off("activeSessions");
    };
  }, []);

  useEffect(() => {
    // Підписка на події Socket.IO при першому рендері
    socket.emit("requestActiveSessions");

    return () => {
      socket.off("activeSessions");
    };
  }, []);

  return (
    <div className={css.timeContainer}>
      <ul>
        <li>
          <p>Today</p>
        </li>
        <li>
          <p>{getDate(undefined, "en")}</p>
        </li>
      </ul>
      <div className={css.timeSessionContainer}>
        <div className={css.onlineTimeContainer}>
          <LuClock8 color="#5c8e29" />
          <p>
            {`${time.getHours().toString().padStart(2, "0")} : ${time
              .getMinutes()
              .toString()
              .padStart(2, "0")}`}
          </p>
        </div>
        <p>Active Sessions: {activeSessions}</p>
      </div>
    </div>
  );
};

export default TopMenu;
