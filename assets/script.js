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
    let sibling = $(this).siblings('.siblingValue').value()
    let parent = $(this).parent().attr('id')
    localStorage.setItem(parent, sibling)
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? ||WORKING||
  
  // USED https://day.js.org/docs/en/get-set/hour AND https://day.js.org/docs/en/display/difference TO WRITE FUNCTION TO FIND DIFFERENCE BETWEEN CURRENT HOUR AND DISPLAYED HOUR
  // NOT GETTING AN ERROR, BUT ALSO NOT WORKING YET
  function workingHours() {
    // GETTING THE CURRENT HOUR
    let getHour = dayjs().hour()
    // ITERATING OVER ALL ELEMENTS WITH THE CLASS OF .TIME-BLOCK
    $('.time-block').each(function() {
      let timeBlockHour = parseInt($(this).attr('id').split('hour')[1]);
      console.log(timeBlockHour, getHour)

      if (timeBlockHour < getHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (timeBlockHour === getHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else if (timeBlockHour > getHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    })
  }

  workingHours()

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? ||WORKING||

  // DOESNT CURRENTLY WORK, TROUBLESHOOTING
  $('#0900, .siblingValue').val(localStorage.getItem('#0900'))
  $('#1000, .siblingValue').val(localStorage.getItem('#1000'))
  $('#1100, .siblingValue').val(localStorage.getItem('#1100'))
  $('#1200, .siblingValue').val(localStorage.getItem('#1200'))
  $('#1300, .siblingValue').val(localStorage.getItem('#1300'))
  $('#1400, .siblingValue').val(localStorage.getItem('#1400'))
  $('#1500, .siblingValue').val(localStorage.getItem('#1500'))
  $('#1600, .siblingValue').val(localStorage.getItem('#1600'))
  $('#1700, .siblingValue').val(localStorage.getItem('#1700'))
  
  // TODO: Add code to display the current date in the header of the page. ||DONE||
  
  //USED https://day.js.org/docs/en/display/format TO FIGURE OUT DISPLAY AND FORMATTING ISSUES
  // FINALLY FIXED, WAS USING WRONG FORMAT AND FUNCTION
  // ERROR RESOLVED || SECTION COMPLETE
  const currentDay = dayjs().format('DD MMM. YYYY H:mm:ss')
  $('#currentDay').text(currentDay)
  // console.log(currentDay)

});
