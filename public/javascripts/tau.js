// Import Tau Prolog core
// Looks like this when tau-prolog is installed with npm:
// var pl = require("tau-prolog");
//var pl = require("../../modules/core");

// Import the lists module
// Looks like this when tau-prolog is installed with npm:
// require("tau-prolog/modules/lists")(pl);
//require("../../modules/lists")(pl);

// Create a session
$( "#c" ).click(function() {
    var session = pl.create(1000);


// Program
    var program =
        // Load the lists module
        ":- use_module(library(lists))." +

        "parallelogram(Fst_angle, Snd_angle, Trd_angle, Frth_angle):-\n" +
        "\t% противоположные стороны попарно равны\n" +
        "    (  " +
        "\t  \tvar( Fst_angle), !,\n" +
        "    \tvar( Snd_angle), !,\n" +
        "    \tvar( Trd_angle), !,\n" +
        "    \tvar( Frth_angle), !)." +
        // fruit/1
        "fruit(apple). fruit(pear). fruit(banana)." +
        // fruits_in/2
        "fruits_in(Xs, X) :- member(X, Xs), fruit(X).";

    // Goal
    var goal = localStorage.getItem('parallelogram');


    // Load the program
    session.consult(program, {
        success: function() {
            // Query the goal
            session.query(goal, {
                success: function() {
                    console.log("2")
                    // Look for answers
                    session.answers(x => console.log(pl.format_answer(x)));
                }
            });
        }
    });

});