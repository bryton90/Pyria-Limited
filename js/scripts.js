//business logic

$(document).ready(function () {

    //toggle what to do.
    $('#design').click(function () {
        $('#design-content').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function () {
        $('#design').show(function () {
            $('#design-content').hide('fast');
        });
    });

    $('#dev').click(function () {
        $('#dev-content').show(function () {
            $('#dev').hide('fast');
        });
    });
    $('#dev-content').click(function () {
        $('#dev').show(function () {
            $('#dev-content').hide('fast');
        });
    });

    $('#product').click(function () {
        $('#product-content').show(function () {
            $('#product').hide('fast');
        });
    });
    $('#product-content').click(function () {
        $('#product').show(function () {
            $('#product-content').hide('fast');
        });
    });

    $(document).ready(function () {
        $('form.contact').on('submit', function (e) {
            
                    alert('We have received your message.Our team will get back to you as soon as possible. Thank you for reaching out to us');
                    $('form.contact')[0].reset();
              
            });
        });
      });

        
