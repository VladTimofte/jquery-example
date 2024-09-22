$(document).ready(function() {
    // Când se apasă pe un buton
    $('.option-btn').on('click', function() {
        const answer = $(this).data('answer'); // Preia răspunsul din atributul data-answer

        if (answer === 'correct') {
            $('#result').text('Corect!').css('color', 'green');
        } else {
            $('#result').text('Greșit!').css('color', 'red');
        }
    });
});
