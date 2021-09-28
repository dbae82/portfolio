console.log("Welcome to my developers portal. Don't do anything you're not supposed to. Thanks.");

var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbx0kqnAOrFIHZ67hM8L2goOmsW5ACQNIiwDmv01jB6o7mwa74LoFcm3Jf2ObcCcBoO2Jg/exec'

$('#submit-btn').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  })
  $form.css("display", "none")
  $('#success').append("<h3>Form has been successfully submitted. Hope you enjoyed my work! 👊</h3>").addClass("uk-margin-xlarge-bottom")
})