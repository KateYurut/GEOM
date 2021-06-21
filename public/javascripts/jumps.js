

//ПЕРЕХОДЫ МЕЖДУ ФОРМАМИ

//ПУТИ ИЗ ПЕРВОЙ ФОРМЫ
$( "#canvas_t" ).click(function() {
    $( ".special_case_triangle" ).css({
        'display' : ''
    });
    $( "body>div" ).addClass("animation_one_h");
});

$( "#canvas_q" ).click(function() {
    $( ".special_case_parallelogram" ).css({
        'display' : '',
    });
    $( "body>div" ).addClass("animation_one_h");
});


//ПУТИ ИЗ ВТОРОЙ ФОРМЫ
$( "#canvas_rt" ).click(function() {
    $( ".right_triangle" ).css({
        'display' : '',
    });
    $( "body>div" ).addClass("animation_two_h");
});
$( "#next_special_case_triangle" ).click(function() {
    $( ".triangle" ).css({
        'display' : '',
    });
    $( "body>div" ).addClass("animation_two_h");
});


$( "#next_special_case_parallelogram" ).click(function() {
    $( "body>div" ).addClass("animation_two_h");
});


//
$( ".next_tri_one_h" ).click(function() {
    $( "body>div" ).addClass("animation_three_h");
});
$( ".next_tri_two_h" ).click(function() {
    $( "body>div" ).addClass("animation_four_h");
});
$( ".next_tri_three_h" ).click(function() {
    if(  $('.i_checkbox_fst_h').is(':checked') ||  $('.i_checkbox_snd_h').is(':checked') ||  $('.i_checkbox_trd_h').is(':checked')  ) {
        $( "body>div" ).addClass("animation_five_h");
    }
    else {
        $( "body>div" ).addClass("animation_from_four_to_eight_h");
    }
});
$( ".next_tri_four_h" ).click(function() {
    $( "body>div" ).addClass("animation_six_h");
});
$( ".next_tri_five_h" ).click(function() {
    $( "body>div" ).addClass("animation_seven_h");
});
$( ".next_tri_six_h" ).click(function() {
    $( "body>div" ).addClass("animation_eight_h");
});
$( ".next_tri_seven_h" ).click(function() {
    $( "body>div" ).addClass("animation_nine_h");
});



