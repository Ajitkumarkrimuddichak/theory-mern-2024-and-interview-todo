var dt = new Date(); //Global veriable
function RenderDate() {
  dt.setDate(1);
  var day = dt.getDay();
  //console.log(dt.getDay());

  //current Date
  var today = new Date();
  //console.log(today);

  //privace month
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  //console.log(endDate);
  //console.log(dt.getMonth());
  //dt.setMonth(11);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //console.log(months[dt.getMonth()]);
  document.getElementById("date_str").innerHTML = dt.toDateString();
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  var cells = "";
  //privace month
  for (x = day; x > 0; x--) {
    cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
  }
  //current month
  for (i = 1; i <= endDate; i++) {
    //current date active
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}
//next priv
function moveDate(para) {
  //console.log(para);
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else {
    if (para == "next") {
      dt.setMonth(dt.getMonth() + 1);
    }
  }
  RenderDate();
}
