
function processForm() {
    // Read form inputs using jQuery
    var personName = $('#Pname').val();
    var character = $('#Character').val();
    var adverb = $('#Adverb').val();
    var adjective = $('#Adjective').val();

    // Create the story using the form inputs
    var story = `${personName} met ${character} ${adverb}. ${personName} thought ${character} was very ${adjective}. ${character} was surprised and said, "${personName}, you are so ${adjective}!"`;

    // Copy the values into the story using jQuery
    $('.content').html('<h2>Siddharth\'s Crazy Mad Libs Story!</h2><p>' + story + '</p>');
}

// Attach the processForm function to the button click event
$(document).ready(function() {
    $('input[type="submit"]').click(function(event) {
        event.preventDefault(); // Prevent default form submission
        processForm(); // Call the processForm function when the button is clicked
    });
});


