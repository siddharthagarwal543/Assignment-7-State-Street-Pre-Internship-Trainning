function calculateImageSize(height, width, colors) {
    // Calculate the total pixels
    const totalPixels = height * width;

    // Calculate the bits per pixel based on the number of colors
    let bitsPerPixel;
    if (colors <= 2) {
        bitsPerPixel = 1;
    } else if (colors <= 16) {
        bitsPerPixel = 4;
    } else if (colors <= 256) {
        bitsPerPixel = 8;
    } else {
        bitsPerPixel = 24; // For true color images (millions of colors)
    }

    // Calculate the total bits used by the image
    const totalBits = totalPixels * bitsPerPixel;

    // Convert bits to bytes
    const totalBytes = totalBits / 8;

    // Calculate the size in kilobytes (KB)
    const sizeInKB = totalBytes / 1024;

    return sizeInKB;
}
function processForm() {
    // Read form inputs using jQuery
    var width = $('#Pname').val();
    var height = $('#Character').val();
    var colors = $('#Adverb').val();

    // Calculate the file size using the form inputs
    var fileSize=calculateImageSize(height,width,colors);

    // Copy the values into the story using jQuery
    if(fileSize<=2)
    $('.content').html('<p> File size is less than 2KB which is okay   </p> <img src="https://png.pngtree.com/png-vector/20210104/ourmid/pngtree-thumbs-up-icon-png-image_2696349.jpg" height="50" width="50" style="margin:10px">');
    else
    $('.content').html('<p> File size is greater than 2KB</p>');
}

// Attach the processForm function to the button click event
$(document).ready(function() {
    $('input[type="submit"]').click(function(event) {
        event.preventDefault(); // Prevent default form submission
        processForm(); // Call the processForm function when the button is clicked
    });
});


