
// HIDING PAGES
$(".pages").hide();

// SHOWING PAGES
$("#hourlyWeatherLink").click(function () {
  $("#firstPage").hide();
  $("#thirdPage").hide();
  $("#secondPage").show();

});

$("#homeLink").click(function () {
  $(".pages").hide();
  $("#firstPage").show();
});

$("#aboutLink").click(function () {
  $(".pages").hide();
  $("#firstPage").hide();
  $("#thirdPage").show();
});
//////////////////////////////////////////////////////////////////////

// AJAX CALLS

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&APPID=4a6c2e4462669ed406a538aeb4a908d5",
  success: function (data) {
    console.log(data)
    let tempNow = document.querySelector("#tempNow");
    let city = document.querySelector("#city");
    let typeOfWeather = document.querySelector("#typeOfWeather");
    tempNow.innerHTML = `${Math.round(data.main.temp)}°`;
    typeOfWeather.innerHTML = data.weather[0].main;
    city.innerHTML = data.name
  },
  error: function (error) {
    console.log(error)
  }
})

// ////////////////////////////////////////////////////
