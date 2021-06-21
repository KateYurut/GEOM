
$( "#next_special_case_triangle" ).click(function() {
    textDrawing(50,215,30, 'bold', 'A');
    textDrawing(200,40,30, 'bold', 'B');
    textDrawing(280,215,30, 'bold', 'C');
    polygonDrawing('209,45 75,203 89,197 207,59', 'fill:black', 'a');
    polygonDrawing('209,45 207,59 264,196 275,203', 'fill:black', 'b');
    polygonDrawing('75,203 90,196 264,196 275,203', 'fill:black', 'c');


    let isO = 0;
    $( ".next_tri_three_h" ).click(function() {
        if ( $('.i_checkbox_fst_h').is(':checked') ) {
            isO += 1;
            textDrawing(120, 105, 30, 'bold', 'H','','','','.svg_height')
            textDrawing(120, 105, 20, '', '1', '1.2em','','','.svg_height')
            polylineDrawing('156,115 165,122 172,114', 'stroke:black;stroke-width:3;fill:none', '.svg_height')
            polygonDrawing('168,104 164,109 259,196 265,196 261,189', 'fill:black', 'a_h', '.svg_height')
            polygonDrawing('161,102 75,203 89,197 166,107', 'fill:black', 'ah1', '.svg_lines')
            polygonDrawing('209,45 161,102 166,107 207,59', 'fill:black', 'h1b', '.svg_lines')
            pathDrawing('M259,177Q250,172 250,183', 'stroke:black; stroke-width:3; fill:none;', 'bch1', '.svg_angles')
            pathDrawing('M250,186Q240,190 248,201', 'stroke:black; stroke-width:3; fill:none;', 'h1ca', '.svg_angles')

            displayBlock('#i_tri_h_fst')
            displayBlock('.label_ah1')
            displayBlock('.label_h1b')
            displayBlock('.label_h1o')
            displayBlock('.label_co')
            displayBlock('.label_bch1')
            displayBlock('.label_h1ca')
        }
        if ( $('.i_checkbox_snd_h').is(':checked') ) {
            isO += 1;
            textDrawing(250, 135, 30, 'bold', 'H','','','','.svg_height')
            textDrawing(250, 135, 20, '', '2', '1.2em','','','.svg_height')
            polylineDrawing('245,140 233,145 227,134', 'stroke:black;stroke-width:3;fill:none', '.svg_height')
            polygonDrawing('236,128 95,190 90,196 96,196 238,134', 'fill:black', 'b_h', '.svg_height')
            polygonDrawing('209,45 207,59 237,131 244,128', 'fill:black', 'bh2', '.svg_lines')
            polygonDrawing('244,128 237,131 264,196 275,203', 'fill:black', 'h2c', '.svg_lines')
            pathDrawing('M102,178Q111,177 107,186', 'stroke:black; stroke-width:3; fill:none;', 'bah2', '.svg_angles')
            pathDrawing('M105,190Q115,190 108,200', 'stroke:black; stroke-width:3; fill:none;', 'h2ac', '.svg_angles')

            displayBlock('#i_tri_h_snd')
            displayBlock('.label_bh2')
            displayBlock('.label_h2c')
            displayBlock('.label_ao')
            displayBlock('.label_h2o')
            displayBlock('.label_bah2')
            displayBlock('.label_h2ac')
        }
        if ( $('.i_checkbox_trd_h').is(':checked') ) {
            isO += 1;
            textDrawing(190, 230, 30, 'bold', 'H','','','','.svg_height')
            textDrawing(190,230, 20, '', '3', '1.2em','','','.svg_height')
            polylineDrawing('195,202 195,188 207,188', 'stroke:black;stroke-width:3;fill:none', '.svg_height')
            polygonDrawing('204,62 204,196 210,196 210,66 207,58', 'fill:black', 'c_h', '.svg_height')
            polygonDrawing('75,203 90,196 207,196 207,203', 'fill:black', 'ah3', '.svg_lines')
            polygonDrawing('207,203 207,196 264,196 275,203', 'fill:black', 'h3c', '.svg_lines')
            pathDrawing('M207,75Q213,85 216,75', 'stroke:black; stroke-width:3; fill:none;', 'h3bc', '.svg_angles')
            pathDrawing('M193,68Q197,85 207,73', 'stroke:black; stroke-width:3; fill:none;', 'abh3', '.svg_angles')

            displayBlock('#i_tri_h_trd')
            displayBlock('.label_ah3')
            displayBlock('.label_h3c')
            displayBlock('.label_bo')
            displayBlock('.label_h3o')
            displayBlock('.label_abh3')
            displayBlock('.label_h3bc')
        }
        if (isO === 1){
            if( $('.i_checkbox_fst_h').is(':checked') ) {
                textDrawing(250,172,15,'','1','-.6em', '-.4em','','.svg_angles')
                textDrawing(240,190,15,'','2','-.8em', '','','.svg_angles')
                displayBlock('.label_h1o','display:none')
                displayBlock('.label_co','display:none')
            }
            else if( $('.i_checkbox_snd_h').is(':checked') ) {
                textDrawing(116,175,15,'','1','.2em', '','','.svg_angles')
                textDrawing(117,190,15,'','2','.4em', '.2em','','.svg_angles')
                displayBlock('.label_ao','display:none')
                displayBlock('.label_h2o','display:none')
            }
            else {
                textDrawing(197,85,15,'','1','-.5em', '.5em','','.svg_angles')
                textDrawing(213,85,15,'','2','-.1em', '.6em','','.svg_angles')
                displayBlock('.label_bo','display:none')
                displayBlock('.label_h3o','display:none')
            }
        }
        else if(isO >= 2){
            if ( $('.i_checkbox_fst_h').is(':checked') ) {
                polygonDrawing('168,104 164,109 203,145 210,142', 'fill:black', 'h1o', '.svg_lines')
                polygonDrawing('210,142 203,145 259,196 265,196 261,189', 'fill:black', 'co', '.svg_lines')
            }
            if ( $('.i_checkbox_snd_h').is(':checked') ) {
                polygonDrawing('206,141 95,190 90,196 96,196 205,148', 'fill:black', 'ao', '.svg_lines')
                polygonDrawing('236,128 206,141 205,148 238,134', 'fill:black', 'h2o', '.svg_lines')
            }
            if ( $('.i_checkbox_trd_h').is(':checked') ) {
                polygonDrawing('204,62 204,145 210,145 210,66 207,58', 'fill:black', 'bo', '.svg_lines')
                polygonDrawing('204,145 204,196 210,196 210,145', 'fill:black', 'h3o', '.svg_lines')
            }
            if ( $('.i_checkbox_fst_h').is(':checked') && $('.i_checkbox_snd_h').is(':checked') && $('.i_checkbox_trd_h').is(':checked') ) {
                textDrawing(116,175,15,'','1','.2em', '','','.svg_angles')
                textDrawing(117,190,15,'','2','.4em', '.2em','','.svg_angles')
                textDrawing(197,85,15,'','3','-.5em', '.5em','','.svg_angles')
                textDrawing(213,85,15,'','4','-.1em', '.6em','','.svg_angles')
                textDrawing(250,172,15,'','5','-.6em', '-.4em','','.svg_angles')
                textDrawing(240,190,15,'','6','-.8em', '','','.svg_angles')
            }
            else if ( $('.i_checkbox_fst_h').is(':checked') && $('.i_checkbox_snd_h').is(':checked') ) {
                textDrawing(116,175,15,'','1','.2em', '','','.svg_angles')
                textDrawing(117,190,15,'','2','.4em', '.2em','','.svg_angles')
                textDrawing(250,172,15,'','3','-.6em', '-.4em','','.svg_angles')
                textDrawing(240,190,15,'','4','-.8em', '','','.svg_angles')
            }
            else if ( $('.i_checkbox_fst_h').is(':checked') && $('.i_checkbox_trd_h').is(':checked') ) {
                textDrawing(197,85,15,'','1','-.5em', '.5em','','.svg_angles')
                textDrawing(213,85,15,'','2','-.1em', '.6em','','.svg_angles')
                textDrawing(250,172,15,'','3','-.6em', '-.4em','','.svg_angles')
                textDrawing(240,190,15,'','4','-.8em', '','','.svg_angles')
            }
            else if ( $('.i_checkbox_snd_h').is(':checked') && $('.i_checkbox_trd_h').is(':checked') ) {
                textDrawing(116,175,15,'','1','.2em', '','','.svg_angles')
                textDrawing(117,190,15,'','2','.4em', '.2em','','.svg_angles')
                textDrawing(197,85,15,'','3','-.5em', '.5em','','.svg_angles')
                textDrawing(213,85,15,'','4','-.1em', '.6em','','.svg_angles')
            }

            middleDrawing('.svg_height')
        }
    })

    $( ".next_tri_six_h" ).click(function() {
        if ( $('.i_checkbox_fst_h').is(':checked') ) {
            polygonDrawing('167,105 165,108 261,196 265,196 263,193', 'fill:#A0A0A0', 'a_h', '.svg_after_h')
            textDrawing(140,100,20,'','H','','','fill:#A0A0A0','.svg_after_h')
            textDrawing(140,100,10,'','1','1.5em','','fill:#A0A0A0','.svg_after_h')
        }
        if ( $('.i_checkbox_snd_h').is(':checked') ) {
            polygonDrawing('237,130 92,193 90,196 94,196 238,133', 'fill:#A0A0A0', 'b_h', '.svg_after_h')
            textDrawing(250,130,20,'','H','','','fill:#A0A0A0','.svg_after_h')
            textDrawing(250,130,10,'','2','1.5em','','fill:#A0A0A0','.svg_after_h')
        }
        if ( $('.i_checkbox_trd_h').is(':checked') ) {
            polygonDrawing('206,60 206,196 209,196 209,64 207,58', 'fill:#A0A0A0', 'c_h', '.svg_after_h')
            textDrawing(200,220,20,'','H','','','fill:#A0A0A0','.svg_after_h')
            textDrawing(200,220,10,'','3','1.5em','','fill:#A0A0A0','.svg_after_h')
        }
        if(isO >= 2) {
            textDrawing(185, 155, 15, '', 'O', '', '', 'fill:#A0A0A0; stroke: #545454')
            d3.selectAll('.svg_after_h')
                .append('circle')
                .attr('cx', 208)
                .attr('cy', 145)
                .attr('r', 2)
                .attr('style', 'fill: #545454');
        }

        rendBisector();
    })

    rendBisector()

})




function displayBlock(selector, value = 'display:block') {
    d3.select(selector)
        .attr('style', value);
}

function middleDrawing(svg = '.svg') {
    textDrawing(175, 160, 25, 'bold', 'O','', '', 'fill: #38B2CE; stroke: black', svg)
    d3.selectAll(svg)
        .append('circle')
        .attr('cx', 207)
        .attr('cy', 145)
        .attr('r', 4)
        .attr('style', 'fill: #38B2CE');
}

function pathDrawing(d, style, classed = '', svg = '.svg') {
    d3.selectAll(svg)
        .append('path')
        .classed(classed, true)
        .attr('d', d)
        .attr('style', style);
}

function polygonDrawing(points, style, classed = '', svg = '.svg') {
    d3.selectAll(svg)
        .append('polygon')
        .classed(classed, true)
        .attr('points', points)
        .attr('style', style);
}

function polylineDrawing(points, style, svg = '.svg') {
    d3.selectAll(svg)
        .append('polyline')
        .attr('points', points)
        .attr('style', style);
}

function textDrawing(x, y, fontSize, fontWeight, text, dx = '0em', dy = '0em', style = '', svg = '.svg') {
    d3.selectAll(svg)
        .append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('dx', dx)
        .attr('dy', dy)
        .attr('font-size', fontSize)
        .attr('font-weight', fontWeight)
        .attr('style', style)
        .text(text);
}


function rendBisector() {
    polygonDrawing('148,128 143,133 259,196 265,196 261,189', 'fill: black', 'a_i','.svg_main_bisector')
    polygonDrawing('238,132 95,190 90,196 96,196 240,138', 'fill: black', 'b_i','.svg_main_bisector')
    polygonDrawing('204,62 180,196 187,196 210,66 207,58', 'fill: black', 'c_i','.svg_main_bisector')

    textDrawing(120,130,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(120,130,20,'','1','.5em','','','.svg_main_bisector')
    textDrawing(255,140,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(255,140,20,'','2','.5em','','','.svg_main_bisector')
    textDrawing(170,230,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(170,230,20,'','3','.5em','','','.svg_main_bisector')
}

function test(){
    textDrawing(50,215,30, 'bold', 'A');
    textDrawing(200,40,30, 'bold', 'B');
    textDrawing(280,215,30, 'bold', 'C');
    polygonDrawing('209,45 75,203 89,197 207,59', 'fill:black', 'a');
    polygonDrawing('209,45 207,59 264,196 275,203', 'fill:black', 'b');
    polygonDrawing('75,203 90,196 264,196 275,203', 'fill:black', 'c');
  //  polygonDrawing('168,104 164,109 259,196 265,196 261,189', 'fill:black', 'a_h')
  //  polygonDrawing('236,128 95,190 90,196 96,196 238,134', 'fill:black', 'b_h')
  //  polygonDrawing('204,62 204,196 210,196 210,66 207,58', 'fill:black', 'c_h')
 //   polygonDrawing('167,105 165,108 261,196 265,196 263,193', 'fill:#A0A0A0', 'a_h')
  //  polygonDrawing('237,130 92,193 90,196 94,196 238,133', 'fill:#A0A0A0', 'b_h')
  //  polygonDrawing('206,60 206,196 209,196 209,64 207,58', 'fill:#A0A0A0', 'c_h')

    textDrawing(140,100,20,'','H','','','fill:#A0A0A0','.svg_after_h')
    textDrawing(140,100,10,'','1','1.5em','','fill:#A0A0A0','.svg_after_h')
    textDrawing(250,130,20,'','H','','','fill:#A0A0A0','.svg_after_h')
    textDrawing(250,130,10,'','2','1.5em','','fill:#A0A0A0','.svg_after_h')
    textDrawing(200,220,20,'','H','','','fill:#A0A0A0','.svg_after_h')
    textDrawing(200,220,10,'','3','1.5em','','fill:#A0A0A0','.svg_after_h')

    textDrawing(185, 155, 15, '', 'O','', '', 'fill:#A0A0A0; stroke: #545454')
    d3.selectAll('.svg_after_h')
        .append('circle')
        .attr('cx', 208)
        .attr('cy', 145)
        .attr('r', 2)
        .attr('style', 'fill: #545454');

  /*  polylineDrawing('156,115 165,122 172,114', 'stroke:black;stroke-width:3;fill:none')
    polygonDrawing('148,128 143,133 259,196 265,196 261,189', 'fill: green', 'a_i')
    polylineDrawing('245,140 233,145 227,134', 'stroke:black;stroke-width:3;fill:none')
    polygonDrawing('238,132 95,190 90,196 96,196 240,138', 'fill: blue', 'b_i')
    polylineDrawing('195,202 195,188 207,188', 'stroke:black;stroke-width:3;fill:none')
    polygonDrawing('204,62 180,196 187,196 210,66 207,58', 'fill: red', 'c_i')

    textDrawing(120,130,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(120,130,20,'','1','.5em','','','.svg_main_bisector')
    textDrawing(255,140,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(255,140,20,'','2','.5em','','','.svg_main_bisector')
    textDrawing(170,230,30,'bold','I','','','','.svg_main_bisector')
    textDrawing(170,230,20,'','3','.5em','','','.svg_main_bisector')*/
}

//test()

