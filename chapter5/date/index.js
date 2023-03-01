const firstTask = () => {
  /*
    Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
    Для вывода используйте alert.
    */
  const currentDate = new Date(Date.parse("2012-02-20T03:12:00"));
  alert(currentDate);
};

const secondTask = () => {
  //Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'.
  let date = new Date(2012, 0, 3); // 3 января 2012 года

  const getWeekDay = (date) => {
    const daysOfTheWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return daysOfTheWeek[date.getDay()];
  };
  alert(getWeekDay(date)); // нужно вывести "ВТ"
};

const thirdTask = () => {
  let date = new Date(2012, 0, 3); // 3 января 2012 года

  const getLocalDay = (date) => {
    const day = date.getDay();
    return day === 0 ? 7 : day;
  };
  alert(getLocalDay(date)); // нужно вывести 2
};

const fourthTask = () => {
  /*
  Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
  К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
  Функция должна надёжно работать при значении days=365 и больших значениях:
    */
  const getDateAgo = (date, days) => {
    let newDate = new Date();
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
  };
  let date = new Date(2015, 0, 2);

  alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
  alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
  alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
};

const fivethTask = () => {
  /*
    Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
    Параметры:
    year – год из четырёх цифр, например, 2012.
    month – месяц от 0 до 11.
    К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
    */
  const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  };
  alert(getLastDayOfMonth(2012, 1)); // 29 (високосный год, февраль).
};

const sixthTask = () => {
  const getSecondsToday = () => {
    const currentDay = new Date();
    return (
      currentDay.getHours() * 3600 +
      currentDay.getMinutes() * 60 +
      currentDay.getSeconds()
    );
  };
  alert(getSecondsToday());
};
const seventhTask = () => {
  /*
    Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
    Например, если сейчас 23:00, то:
    getSecondsToTomorrow() == 3600
    P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
    */
  const getSecondsToTomorrow = () => {
    const currentDay = new Date();
    return (
      86400 -
      (currentDay.getHours() * 3600 +
        currentDay.getMinutes() * 60 +
        currentDay.getSeconds())
    );
  };
  alert(getSecondsToTomorrow());
};

const eighthTask = () => {
  /*Напишите функцию formatDate(date), форматирующую date по следующему принципу:
    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
    всё в виде двух цифр, т.е. 31.12.16 10:00.
    */
  const formatDate = (date) => {
    const currentDate = new Date();
    const difference = (currentDate.getTime() - date.getTime()) / 1000;
    if (difference < 1) {
      return "прямо сейчас";
    }
    if (difference < 60) {
      return `${difference} сек. назад`;
    }
    if (difference < 3600) {
      return `${difference / 60} мин. назад`;
    }
    if (difference < 86400) {
      let minutes = (difference % 86400) / 60;
      return `${Math.floor(difference / 3600)} ч. и ${minutes % 60} мин. назад`;
    }
    if (difference >= 86400) {
      let anotherDay = new Date();
      anotherDay.setDate(date.getDate()-Math.floor(difference/86400));
      let [aDate, aTime] = anotherDay.toLocaleString().split(', ');
      let day = aDate.split('.').map((el) => el.slice(-2)).join('.')
      let time = aTime.slice(0, -3);
      return `${day} ${time}`;
    }
  };

  alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

  alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

  alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
  alert(formatDate(new Date(new Date() - 180 * 60 * 1000))); // "2 ч. и 30 мин. назад"

  // вчерашняя дата вроде 31.12.16 10:00
  alert(formatDate(new Date(new Date() - 86400 * 1000)));
};

eighthTask();
