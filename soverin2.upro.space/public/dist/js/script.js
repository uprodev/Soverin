jQuery(document).ready(function($){


    //forms
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
        });
        var form = $('.formCta');
        form.submit(function(e) {
            e.preventDefault();

            $.ajax({
              url: form.attr('action'),
              data: form.serialize()
            })
                .done(function(response) {
                   $('.submitResult').html('Done')
                  console.log(response)
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


  //filter

  var form = $('#filter');
  $('#filter input').on('change input', function(e) {
    e.preventDefault();

    $.ajax({
      url: form.attr('action'),
      data: form.serialize()
    })
      .done(function(response) {
       // console.log(response)

        $('.content-posts').html(response)
      })

      .fail(function() {
        console.log('boo')
      });

    return false;
  });

  if ($('#search').length)
  document.getElementById('search').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });


})
