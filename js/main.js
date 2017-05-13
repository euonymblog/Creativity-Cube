$( document ).ready(function(){

    // Your code here.

    // list the colours to be used

    var color = [
        'mediumseagreen',
        'crimson',
        'turquoise',
        'rosybrown',
        'darkorange',
        'blueviolet',
        'limegreen',
        'gold',
        'midnightblue',
        'tomato',
        'teal',
        'darkorchid',
        'red'
      ];

    var tip = [
      'Go for a walk',
      'Make the case for the opposite point of view',
      'Vary your routine',
      'Do not be defined by your work',
      'Ask someone else what they think'
    ];

    // Create a variable called randomizeBoxes
    var randomizeBoxes = function(){

      // Make that variable do the following
      // create a variable called offset that is a random number btween 0 and the number of colours

      var offset = Math.floor(Math.random() * color.length);
      // console.log("The offset is " + offset)
      // create i that is between 0 and 9 (number of boxes)

      for (var i=0; i < 9; i++) {

        // create a new variable that is the offset number + i
        var newColorOffset = offset+i;

        // console.log("The newColorOffset is" + newColorOffset)

        // if the new number is higher than the number of colours then subtract the number of colors
        if(newColorOffset > color.length) {
          newColorOffset -= color.length;
        }

        // console.log("The newColorOffset is" + newColorOffset)

          // give the box with the number i the background colour that relates to the position in the array of newColorOffset

       $('.box'+i).css('background-color', color[newColorOffset]);
    // console.log("The color is" + color[newColorOffset])

      } //end for loop
    }
      var showTip = tip[Math.floor(Math.random() * tip.length)];


    $( ".tip" ).hide();
    $('button').click(function () {

      var stopper = setInterval(randomizeBoxes, 100);
      setTimeout(function () {

        // $(".tip").html(showTip);

        clearInterval(stopper);

      }, 3000);

      $(".tip").html(showTip);
      $('.buttonholder').hide();

    // $( ".tip" ).hide();
    // $('button').click(function () {
    //
    //   $('.buttonholder').hide();
    //
    //   var stopper = setInterval(randomizeBoxes, 100);
    //   setTimeout(function () {
    //     clearInterval(stopper);
    //   }, 3000;
    //
    //   $(".tip").html(showTip);

  // console.log("Your tip is " + showTip);
// console.log ("your tip is shown")

    });


});
