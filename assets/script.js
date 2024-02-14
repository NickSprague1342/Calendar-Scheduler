console.log('testing')

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. ||DONE||

// USED https://learn.jquery.com/using-jquery-core/document-ready/ TO LEARN ABOUT HOW $(document).ready() DETECTS THE READINESS STATE OF A WEBPAGE
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? ||DONE||

  // USED https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this TO LEARN MORE ABOUT (this)

  // WAS GETTING ERRORS IN THE CONSOLE WAS TRYING TO USE FUNCTION onclick(function()) INSTEAD OF .on('click', function())
  // ERROR RESOLVED || SECTION COMPLETE
  $('.saveBtn').on('click', function() {
    console.log(this)
    var sibling = $(this).siblings('.siblingValue').value()
    var parent = $(this).parent().attr('id')
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page. ||DONE||
  
  //USED https://day.js.org/docs/en/display/format TO FIGURE OUT DISPLAY AND FORMATTING ISSUES
  // FINALLY FIXED, WAS USING WRONG FORMAT AND FUNCTION
  // ERROR RESOLVED || SECTION COMPLETE
  var currentDay = dayjs().format('DD MMM. YYYY H:mm:ss')
  $('#currentDay').text(currentDay)
  // console.log(currentDay)

});
