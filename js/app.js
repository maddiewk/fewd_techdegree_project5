// ============ Lightbox Functions ================ //

lightbox.option({
  'showImageNumberLabel': false,
  'wrapAround': true
});


// ============ Search Box Function ================ //

$('#search').on('keyup', function() {
  const $userInput = $('#search').val().toLowerCase();
  const $anchor = $('.gall').length;

  for (let i = 0; i < $anchor; i++) {
    let $currentLink = $('.gall').eq(i);
    let $caption = $currentLink.attr('data-title');
    if ($caption.indexOf($userInput) > -1) {
       $currentLink.css('display', '');
     } else {
       $currentLink.css('display', 'none');
     }
   }
});
