jQuery(document).ready(function($){


    //forms
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
    });


  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


  $('.formCta').submit(function(e){
    e.preventDefault();


    var that = $(this);

    let success = that.find('.submitResult').attr('data-success');
    let err = that.find('.submitResult').attr('data-err');

    var form = $(this)[0]
    axios.post(form.action, new FormData(form))
      .then(response => {
        console.log(response.data);
        that.find('.submitResult').show();
        that.find('.submitResult').text(success);
        form.reset();
      })
      .catch(error => {
          that.find('.submitResult').show();
          that.find('.submitResult').text(err);
      });
  })







        //content
  if ($('.content-area')) {
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
  }

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

  //calculator

    function updatePrice($counter) {
        let pricePerItem = parseFloat($counter.attr('data-price'));
        let quantity = parseInt($counter.find('.quantity').val());
        let price = quantity * pricePerItem;



        if (price === 0) {
            $counter.find('.total p').text('€  хх,xх');
        } else {
            $counter.find('.total p').text('€  ' + price + ',00');
        }
    }

    function updateTotalPrice() {
        let total = 0;
        $('.input-wrap').each(function () {
            let quantity = parseInt($(this).find('.quantity').val());
            let pricePerItem = parseFloat($(this).attr('data-price'));

            total += quantity * pricePerItem;

        });
        $('.total-text p').text('€ ' + total + ',00');
        $('#total_price').val('€ ' + total + ',00');
    }

    $(document).on('change', '[name="radio_field"]', function(){
        let domen = $(this).val();
        let price_domen = $(this).attr('data-domen');

        $('.dmn').text(domen);
        $('.wrap-domen').attr('data-price', price_domen);
        let $counter = $(this).closest('.input-wrap');

        updatePrice($counter);
        updateTotalPrice();
    });

    $('.btn-count-plus').click(function () {
        let $counter = $(this).closest('.input-wrap');
        let $quantity = $counter.find('.quantity');
        let value = parseInt($quantity.val());

        $quantity.val(value + 1);
        $counter.find('.quantity_counts').val(value + 1);
        updatePrice($counter);
        updateTotalPrice();
    });

    $('.btn-count-minus').click(function () {
        let $counter = $(this).closest('.input-wrap');
        let $quantity = $counter.find('.quantity');
        let value = parseInt($quantity.val());

        if (value > 0) {
            $quantity.val(value - 1);
            $counter.find('.quantity_counts').val(value - 1);
        }

        updatePrice($counter);
        updateTotalPrice();
    });

})
