$.extend({
  message: function(options) {
      var defaults={
          message:' 操作成功',
          time:'2000',
          type:'success',
          showClose:false,
          autoClose:true,
          onClose:function(){}
      };
      
      if(typeof options === 'string'){
          defaults.message=options;
      }
      if(typeof options === 'object'){
          defaults=$.extend({},defaults,options);
      }
      var templateClose=defaults.showClose?'<a class="c-message--close">×</a>':'';
      var template='<div class="c-message">'+
          '<i class=" c-message--icon c-message--'+defaults.type+'"></i>'+
          templateClose+
          '<div class="c-message--tip">'+defaults.message+'</div>'+
      '</div>';
      var _this=this;
      var $body=$('body');
      var $message=$(template);
      var timer;
      var closeFn,removeFn;
     
      //移除
      removeFn=function(){
          $message.remove();
          defaults.onClose(defaults);
          clearTimeout(timer);
      };
      //移除所有
      $('.c-message').remove();
      $body.append($message);
      //居中
      $message.css({
          'margin-left':'-'+$message.width()/2+'px'
      })
      //点击关闭
      $body.on('click','.c-message--close',function(e){
          removeFn();
      });
      //自动关闭
      if(defaults.autoClose){
          timer=setTimeout(function(){
              removeFn();
          },defaults.time)
      }
  }
});