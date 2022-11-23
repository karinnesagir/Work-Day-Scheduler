
// Wrapping all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {

  $('.saveBtn').on('click', function(){
    var hour = $(this).parent().attr('id');
    var event = $(this).siblings('.description').val();

    // saving user input in local storage
    localStorage.setItem(hour, event);
  })


  // Applying the past, present, or future class (compared to the current hour) to each time block 
  function boxTense(){

    var currentTime = dayjs().format('HH');

    $('.time-block').each(function(){
      var timeBlock = parseInt($(this).attr('id').split('hour-')[1]);
   
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

  boxTense();
  
  
  // Getting user input that was saved in localStorage and setting the values of the corresponding textarea elements
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


  // Displaying the current date in the header of the page
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').html(currentDate);

});