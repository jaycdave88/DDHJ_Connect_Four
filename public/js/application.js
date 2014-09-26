var Counter = function() {
  this.count = 0
};

Counter.prototype.increment = function() {
  this.count ++
};

var clickCounter = new Counter();

var isEven = function(count) {
  if ( count % 2 === 0 ) {
    return true
  } else {
    return false
  }
};

$( '.column' ).on( 'click', function() {

  if ( isEven(clickCounter.count) ) {
    newClass = "red"
  } else {
    newClass = "yellow"
  };

  if ( jQuery.isEmptyObject($( this ).children( ".empty" )[0]) ) {
    alert("You can't do that!");
  } else {
    $( this ).children( ".empty" ).last().attr("class",newClass);
    clickCounter.increment();
  }
})

