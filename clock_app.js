var app = {};

app.getTime = function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  //Output unit of time as double digit if the unit is less than 10
  hours = app.updateTime(hours);
  minutes = app.updateTime(minutes);
  seconds = app.updateTime(seconds);
  var currentTime = document.getElementById('clock').innerHTML =
  hours + ' : ' + minutes + ' : ' + seconds;
  //Output current time

  var timeout = setTimeout(function() {app.getTime()}
  , 1000);
  }

app.updateTime = function(u) {
  if (u<10) {
    return '0' + u;
  }
  else {
    return u;
  }
}

app.getTime();
