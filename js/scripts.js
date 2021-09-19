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
      $("#chainedLI").css("color", "green");
    } else {
      $("#carousel").hide();
    }

    if (allInches >= 45 && allInches <= 71) {
      $("#ferris").show();
      $("#ferrisLI").css("color", "green");
    } else {
      $("#ferris").hide();
    }

    if (allInches >= 52 && allInches <= 104) {
      $("#draft").show();
      $("#draftLI").css("color", "green");
    } else {
      $("#draft").hide();
    }

    if (allInches >= 57 && allInches <= 92) {
      $("#cliff").show();
      $("#cliffLI").css("color", "green");
    } else {
      $("#cliff").hide();
    }

    if (allInches >= 60 && allInches <= 77) {
      $("#winder").show();
      $("#winderLI").css("color", "green");
    } else {
      $("#winder").hide();
    }

    if (allInches >= 36 && allInches <= 104) {
      $("#swing").show();
      $("#swingLI").css("color", "green");
    } else {
      $("#swing").hide();
    }

  });

});