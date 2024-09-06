jQuery(document).ready(function($){


    //form
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
        });
        var form = $('#formCta');
        form.submit(function(e) {
            e.preventDefault();

            $.ajax({url: form.attr('action')})
                .done(function() {
                   $('.submitResult').html('Done')
                })

                .fail(function() {
                    console.log('boo')
                });

            return false;
        });


        //content

    var $menu = $('.article-menu');
    var $contentArea = $('.content-area');
    var headingIndex = 1;

    $contentArea.find('h2, h3').each(function() {
        var $heading = $(this);
        var headingText = $heading.text();
        var anchorId = 'heading-' + headingIndex;

        $heading.attr('id', anchorId);
        var $menuItem = $('<li><a class="js-curnav-switch" href="#' + anchorId + '">' + headingText + '</a></li>');

        $menu.append($menuItem);
        headingIndex++;
    });
})
