// ============ Lightbox Functions ================ //

lightbox.option({
  'showImageNumberLabel': true,
  'wrapAround': true
});


// ============ Search Box Function ================ //

$('#search').on('keyup', function() {
  const $userInput = $('#search').val().toLowerCase();
  const $anchor = $('.gall').length;

  for (let i = 0; i < $anchor; i++) {
    let $currentImage = $('.gall').eq(i);
    let $caption = $currentImage.attr('data-title');
    if ($caption.indexOf($userInput) > -1) {
       $currentImage.css('display', '');
     } else {
       $currentImage.css('display', 'none');
     }
   }
});
