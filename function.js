/**
 * Fix Jo-Fola (য-ফলা) in Bengali.
 * 
 * Using Unijoy Keyboard on MacOS depicts jo-fola wrong.
 * This function is intended to be used as a Bookmarklet.
 * 
 * @author Mayeenul Islam
 * @license MIT License
 * @version 1.0
 */
function fixJoFola() {
    // Select the textarea from https://textarea.online window
    var textarea = document.querySelector('textarea#textarea');

    // Grab the text written there
    var text = textarea.value;

    // Encode the text into URI
    var encodedText = encodeURI(text);

    // Fix the j-fola by removing unwanted invisible character
    encodedText = encodedText.replaceAll("%E2%80%8D", "");

    // Decode the text back to its readable form
    var decodedText = decodeURI(encodedText);

    // Set the code back into its place (the textarea)
    textarea.value = decodedText;
}

// Invoke the function.
fixJoFola();
