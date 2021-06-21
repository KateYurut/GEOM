
// canvas for triangle
var canvas_triangle = document.getElementById('canvas_triangle');
var canvas_t = document.getElementById('canvas_t');
var flag = 0;
createCanvasForTriangle(canvas_triangle, flag);
flag = 1;
createCanvasForTriangle(canvas_t, flag);

function createCanvasForTriangle(canvas_triangle, flag) {
    canvas_triangle.width = 150
    canvas_triangle.height = 150

    if (canvas_triangle.getContext) {
        var context_triangle = canvas_triangle.getContext('2d');

        context_triangle.strokeStyle = '#000000';
        if (flag === 0) context_triangle.lineWidth = 4;
        else context_triangle.lineWidth = 2;
        context_triangle.beginPath();
        context_triangle.moveTo(90, 30);
        context_triangle.lineTo(30, 120);
        context_triangle.lineTo(120, 120);
        context_triangle.closePath();
        context_triangle.stroke();
    }
}


// canvas for quadrilateral
var canvas_quadr = document.getElementById('canvas_quadr');
var canvas_q = document.getElementById('canvas_q');
flag = 0;
createCanvasForQuadr(canvas_quadr, flag);
flag = 1;
createCanvasForQuadr(canvas_q, flag);

function createCanvasForQuadr(canvas_quadr, flag) {
    canvas_quadr.width = 150
    canvas_quadr.height = 150

    if (canvas_quadr.getContext) {
        var context_quadr = canvas_quadr.getContext('2d');

        context_quadr.strokeStyle = '#000000';
        if (flag === 0) context_quadr.lineWidth = 4;
        else context_quadr.lineWidth = 2;

        context_quadr.beginPath();
        context_quadr.moveTo(20, 110);
        context_quadr.lineTo(50, 40);
        context_quadr.lineTo(130, 40);
        context_quadr.lineTo(100, 110);
        context_quadr.closePath();
        context_quadr.stroke();
    }
}


// canvas for circle
var canvas_circle = document.getElementById('canvas_circle');
var canvas_c = document.getElementById('canvas_c');
flag = 0;
createCanvasForCircle(canvas_circle, flag);
flag = 1;
createCanvasForCircle(canvas_c, flag);

function createCanvasForCircle(canvas_circle, flag) {
    canvas_circle.width = 150
    canvas_circle.height = 150

    if (canvas_circle.getContext) {
        var context_circle = canvas_circle.getContext('2d');

        context_circle.strokeStyle = '#000000';
        if (flag === 0) context_circle.lineWidth = 4;
        else context_circle.lineWidth = 2;
        context_circle.arc(75,75,47, 0, 360)
        context_circle.stroke();
    }
}

// canvas for square
var canvas_square = document.getElementById('canvas_square');
var canvas_s = document.getElementById('canvas_s');
flag = 0;
createCanvasForSquare(canvas_square, flag);
flag = 1;
createCanvasForSquare(canvas_s, flag);

function createCanvasForSquare(canvas_square, flag) {
    canvas_square.width = 150
    canvas_square.height = 150

    if (canvas_square.getContext) {
        var context_square = canvas_square.getContext('2d');

        context_square.strokeStyle = '#000000';
        if (flag === 0) context_square.lineWidth = 4;
        else context_square.lineWidth = 2;
        context_square.strokeRect(40, 40, 70, 70);
    }
}


// canvas for rectangle
var canvas_rectangle = document.getElementById('canvas_rectangle');
var canvas_r = document.getElementById('canvas_r');
flag = 0;
createCanvasForRectangle(canvas_rectangle, flag);
flag = 1;
createCanvasForRectangle(canvas_r, flag);

function createCanvasForRectangle(canvas_rectangle, flag) {
    canvas_rectangle.width = 150
    canvas_rectangle.height = 150

    if (canvas_rectangle.getContext) {
        var context_rectangle = canvas_rectangle.getContext('2d');

        context_rectangle.strokeStyle = '#000000';
        if (flag === 0) context_rectangle.lineWidth = 4;
        else context_rectangle.lineWidth = 2;
        context_rectangle.strokeRect(30, 40, 90, 70);
    }
}


// canvas for rhombus
var canvas_rhombus = document.getElementById('canvas_rhombus');
var canvas_rh = document.getElementById('canvas_rh');
flag = 0;
createCanvasForRhombus(canvas_rhombus, flag);
flag = 1;
createCanvasForRhombus(canvas_rh, flag);

function createCanvasForRhombus(canvas_rhombus, flag) {
    canvas_rhombus.width = 150
    canvas_rhombus.height = 150

    if (canvas_rhombus.getContext) {
        var context_rhombus = canvas_rhombus.getContext('2d');

        context_rhombus.strokeStyle = '#000000';
        if (flag === 0) context_rhombus.lineWidth = 4;
        else context_rhombus.lineWidth = 2;

        context_rhombus.beginPath();
        context_rhombus.moveTo(75, 30);
        context_rhombus.lineTo(30, 75);
        context_rhombus.lineTo(75, 120);
        context_rhombus.lineTo(120, 75);
        context_rhombus.closePath();
        context_rhombus.stroke();
    }
}


// canvas for right triangle
var canvas_right_triangle = document.getElementById('canvas_right_triangle');
var canvas_rt = document.getElementById('canvas_rt');
flag = 0;
createCanvasForRightTriangle(canvas_right_triangle, flag);
flag = 1;
createCanvasForRightTriangle(canvas_rt, flag);

function createCanvasForRightTriangle(canvas_right_triangle, flag) {
    canvas_right_triangle.width = 150
    canvas_right_triangle.height = 150

    if (canvas_right_triangle.getContext) {
        var context_right_triangle = canvas_right_triangle.getContext('2d');

        context_right_triangle.strokeStyle = '#000000';
        if (flag === 0) context_right_triangle.lineWidth = 4;
        else context_right_triangle.lineWidth = 2;
        context_right_triangle.beginPath();
        context_right_triangle.moveTo(30, 30);
        context_right_triangle.lineTo(30, 120);
        context_right_triangle.lineTo(120, 120);
        context_right_triangle.closePath();
        context_right_triangle.stroke();
    }
}


// canvas for isosceles triangle
var canvas_isosceles_triangle = document.getElementById('canvas_isosceles_triangle');
var canvas_it = document.getElementById('canvas_it');
flag = 0;
createCanvasForIsoscelesTriangle(canvas_isosceles_triangle, flag);
flag = 1;
createCanvasForIsoscelesTriangle(canvas_it, flag);

function createCanvasForIsoscelesTriangle(canvas_isosceles_triangle, flag) {
    canvas_isosceles_triangle.width = 150
    canvas_isosceles_triangle.height = 150

    if (canvas_isosceles_triangle.getContext) {
        var context_isosceles_triangle = canvas_isosceles_triangle.getContext('2d');

        context_isosceles_triangle.strokeStyle = '#000000';
        if (flag === 0) context_isosceles_triangle.lineWidth = 4;
        else context_isosceles_triangle.lineWidth = 2;
        context_isosceles_triangle.beginPath();
        context_isosceles_triangle.moveTo(75, 30);
        context_isosceles_triangle.lineTo(30, 120);
        context_isosceles_triangle.lineTo(120, 120);
        context_isosceles_triangle.closePath();
        context_isosceles_triangle.stroke();
    }
}


// canvas for equilateral triangle
var canvas_equilateral_triangle = document.getElementById('canvas_equilateral_triangle');
var canvas_et = document.getElementById('canvas_et');
flag = 0;
createCanvasForEquilateralTriangle(canvas_equilateral_triangle, flag);
flag = 1;
createCanvasForEquilateralTriangle(canvas_et, flag);

function createCanvasForEquilateralTriangle(canvas_equilateral_triangle, flag) {
    canvas_equilateral_triangle.width = 150
    canvas_equilateral_triangle.height = 150

    if (canvas_equilateral_triangle.getContext) {
        var context_equilateral_triangle = canvas_equilateral_triangle.getContext('2d');

        context_equilateral_triangle.strokeStyle = '#000000';
        if (flag === 0) context_equilateral_triangle.lineWidth = 4;
        else context_equilateral_triangle.lineWidth = 2;
        context_equilateral_triangle.beginPath();
        context_equilateral_triangle.moveTo(75, 35);
        context_equilateral_triangle.lineTo(30, 115);
        context_equilateral_triangle.lineTo(120, 115);
        context_equilateral_triangle.closePath();
        context_equilateral_triangle.stroke();
    }
}


// сближение фигур
$( "#canvas_t" ).mouseover(function() {
    $( "#canvas_triangle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".fst_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                .mouseout(function() {
    $( "#canvas_triangle" ).css({
        'transform' : 'translate(-4px, -3px)'
    });
    $( ".fst_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
});
$( "#canvas_q" ).mouseover(function() {
    $( "#canvas_quadr" ).css({
        'transform' : 'translate(0)'
    });
    $( ".snd_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                .mouseout(function() {
    $( "#canvas_quadr" ).css({
        'transform' : 'translate(-3px, -3px)'
    });
    $( ".snd_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
})
$( "#canvas_c" ).mouseover(function() {
    $( "#canvas_circle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".trd_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                .mouseout(function() {
    $( "#canvas_circle" ).css({
        'transform' : 'translate(-4px, -3px)'
    });
    $( ".trd_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
});
$( "#canvas_s" ).mouseover(function() {
    $( "#canvas_square" ).css({
        'transform' : 'translate(0)'
    });
    $( ".frth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                .mouseout(function() {
    $( "#canvas_square" ).css({
        'transform' : 'translate(-3px, -3px)'
    });
    $( ".frth_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
});
$( "#canvas_r" ).mouseover(function() {
    $( "#canvas_rectangle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".fth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                .mouseout(function() {
    $( "#canvas_rectangle" ).css({
        'transform' : 'translate(-3px, -3px)'
    });
    $( ".fth_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
});
$( "#canvas_rh" ).mouseover(function() {
    $( "#canvas_rhombus" ).css({
        'transform' : 'translate(0)'
    });
    $( ".sth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
                 .mouseout(function() {
    $( "#canvas_rhombus" ).css({
        'transform' : 'translate(-5px, -1px)'
    });
    $( ".sth_fig>div" ).css({
        'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
    });
});

$( "#canvas_rt" ).mouseover(function() {
    $( "#canvas_right_triangle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".frth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
    .mouseout(function() {
        $( "#canvas_right_triangle" ).css({
            'transform' : 'translate(-7px, -3px)'
        });
        $( ".frth_fig>div" ).css({
            'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
        });
    });

$( "#canvas_it" ).mouseover(function() {
    $( "#canvas_isosceles_triangle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".fth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
    .mouseout(function() {
        $( "#canvas_isosceles_triangle" ).css({
            'transform' : 'translate(-5px, -3px)'
        });
        $( ".fth_fig>div" ).css({
            'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
        });
    });

$( "#canvas_et" ).mouseover(function() {
    $( "#canvas_equilateral_triangle" ).css({
        'transform' : 'translate(0)'
    });
    $( ".sth_fig>div" ).css({
        'transition' : 'all 500ms ease',
        'box-shadow' : 'rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px'
    });
})
    .mouseout(function() {
        $( "#canvas_equilateral_triangle" ).css({
            'transform' : 'translate(-5px, -3px)'
        });
        $( ".sth_fig>div" ).css({
            'box-shadow' : 'rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px'
        });
    });