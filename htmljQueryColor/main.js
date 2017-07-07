$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  $('p').each(function(){
    var text = $(this).text().split(' ').join(' </span><span>');
    $(this).empty().html(text);
  });
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 

  $("span").each(function(index) {        
  	this.flash = function(){
  	  setTimeout(function(){
        $(this).css("color",randomColor())
        this.flash();
  	  }.bind(this),1000)		
  	}
  	this.flash();
  });
});

  
