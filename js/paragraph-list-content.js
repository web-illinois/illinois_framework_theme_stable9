jQuery(function($) {
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"][theme="gray"]').removeAttr('width').attr('padding', '15px 20px 30px 20px');
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"]:not([theme="gray"])').removeAttr('width').attr('padding', '30px 0');
});
