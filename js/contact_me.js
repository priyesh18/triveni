$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault();
      
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      .append("</button>");
      $('#success > .alert-success')
      .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
      .append('</div>');
      $("#contactForm").trigger('submit');
      $("#contactForm").trigger('reset');
      // setTimeout(function() { }, 5000)
      //clear all fields
      
    },
        
      });

  // $("a[data-toggle=\"tab\"]").click(function(e) {
  //   e.preventDefault();
  //   $(this).tab("show");
  // });


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
})
