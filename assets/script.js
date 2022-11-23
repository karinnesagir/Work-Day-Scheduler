
// Wrapping all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {

  $('.saveBtn').on('click', function(){
    var hour = $(this).parent().attr('id');
    var name = $(this).siblings('.description').val();

    // saving user input in local storage
    localStorage.setItem(hour, name);
  })


  // Applying the past, present, or future class (compared to the current hour) to each time block 
  function timeColor(){

    var currentTime = $.now();

    $('.time-block').each(function(){
      var timeBlock = parseInt($(this).attr('id').split('hour')[1]);
   
      if(currentTime == timeBlock){
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }else if (currentTime > timeBlock){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }else{
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }  
    
    })

  }

  timeColor();
  
  
  // Getting user input that was saved in localStorage and setting the values of the corresponding textarea elements
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));


  // Displaying the current date in the header of the page
  var currentDate = dayjs().format('dddd, MMMM Do');
  $('#currentDay').html(currentDate);


});


// Do date
// .now() (two integers) (always past?)