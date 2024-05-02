$(document).ready(function() {
    $('#task-form').submit(function(e) {
        e.preventDefault();
        let nomeTarefa = $('#task-input').val();
        if (nomeTarefa.trim() !== '') {
            $('#task-list').append('<li>' + nomeTarefa + '</li>');
            $('#task-input').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
