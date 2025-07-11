jQuery(function($) {
  $('ilw-columns .paragraph--type--rt ilw-content[width="auto"]:not([theme="gray"])').removeAttr('width');
  $('ilw-columns .paragraph--type--rt ilw-content[width="auto"][theme="gray"]').removeAttr('width').attr('padding', '20px 20px 30px');
  $('ilw-columns .paragraph--type--rt ilw-columns[width="auto"]').removeAttr('width');
  $('ilw-columns .paragraph--type--contact ilw-columns[width="auto"]').removeAttr('width');
});
