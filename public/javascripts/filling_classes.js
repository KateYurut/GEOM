
$( "#next_t" ).click(function() {
    console.log("axyet");
    var firstSide = document.getElementById('first_side_parallelogram').value;
    if (firstSide === "" || isNaN(firstSide)) {
        firstSide = "Fst_side"
    }
    var secondSide = document.getElementById('second_side_parallelogram').value;
    if (secondSide === "" || isNaN(secondSide)) {
        secondSide = "Snd_side"
    }
  //  var thirdSide = 5;
    var thirdSide = document.getElementById('third_side_parallelogram').value;
    console.log(thirdSide)
    if (thirdSide === "" || isNaN(thirdSide)) {
        thirdSide = "Trd_side"
    }
    var fourthSide = document.getElementById('fourth_side_parallelogram').value;
    if (fourthSide === "" || isNaN(fourthSide)) {
        fourthSide = "Frth_side"
    }

    let parallelogram = new Parallelogram(1,2, firstSide, secondSide, thirdSide, fourthSide);
    localStorage.setItem('parallelogram', parallelogram.goal());

    console.log(parallelogram.goal());
});