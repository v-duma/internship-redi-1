const months = [
    "januar",
    "februar",
    "märz",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "dezember",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "sonntag",
    "montag",
    "dienstag",
    "mittwoch",
    "donnerstag",
    "freitag",
    "samstag",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["Winter", "Frühling", "Sommer", "Herbst"];

function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
  function innerDate(counter, dateType, className) {
    const _msInDay = 86400000;
    let newCounter = dateType === "date-" ? -counter : counter;
    const _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();

    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + "." + monthDefault + "." + _year;

    const element = document.querySelector("." + className);
    if (element) {
      element.innerHTML = defaultDate;
    }
  }

  innerDate(4, "date-", "date-minus-4");
  innerDate(2, "date-", "date-minus-2");
  innerDate(0, "date", "date-today");
}

function addZero(numb) {
  return numb < 10 ? "0" + numb : numb;
}

document.addEventListener("DOMContentLoaded", function () {
  postDate(days, daysMin, months, monthMin, seasons);
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("social-media").style.display = "none";
});
