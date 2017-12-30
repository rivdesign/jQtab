(function($){

  $.fn.urijqtab = function(options) {

    var settings = $.extend({
      handler : '.tab_menu',
      item    : '.tab_item'
    },options);

    return this.each(function(){
      var $this = $(this);
      var $handler = $(settings.handler);
      var $handlerItem = $(settings.handler).find('li');
      var $item = $(settings.item);
      var $link = $(settings.handler).find('a');
      
      $this.find($handler).find('ul li').first().addClass('active');
      $this.find($item).hide().first().show();

      $link.click(function(){
        $handlerItem.removeClass('active');
        $(this).parent().addClass('active');

        $(this).parents($this).find($item).hide();
        $($(this).attr('href')).fadeIn();

        return false;
      });
    });

  };

}(jQuery));