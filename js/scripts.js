// Business Logic:

// UI Logic:
$(document).ready(function() {

  $("#heightForm").submit(function(event) {
    event.preventDefault();
    let userFeet = parseInt($("#feet").val());
    let userInch = parseInt($("#inch").val());
    let allInches = (userFeet * 12) + userInch

    console.log(userFeet)
    console.log(userInch)
    console.log(allInches)

    if (allInches >= 40 && allInches <= 68) {
      $("#carousel").show();
    } else {
      $("#carousel").hide();
    }

    if (allInches >= 45 && allInches <= 71) {
      $("#ferris").show();
    } else {
      $("#ferris").hide();
    }

    if (allInches >= 52 && allInches <= 104) {
      $("#draft").show();
    } else {
      $("#draft").hide();
    }

    if (allInches >= 57 && allInches <= 92) {
      $("#cliff").show();
    } else {
      $("#cliff").hide();
    }

    if (allInches >= 60 && allInches <= 77) {
      $("#winder").show();
    } else {
      $("#winder").hide();
    }

    if (allInches >= 36 && allInches <= 104) {
      $("#swing").show();
    } else {
      $("#swing").hide();
    }

  });

});