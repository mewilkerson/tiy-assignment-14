var showGalleries = function() {
  $("body").html( JST["galleries"]() );
};

var showPhotos = function() {
  $("body").html( JST["photos"]() );
};

var zoomPhoto = function() {
  $("body").html( JST["photo-zoom"]() );
};
