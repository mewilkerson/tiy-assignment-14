var AlbumsCollection =  (function() {
  
  function AlbumsCollection(data) {
    this.data = data;
  }

  AlbumsCollection.prototype = {

    render: function() {
      var $ul = $el.find("ul");
      var $el = $( template() );

      _.each(this.data, function(album){
        var thumbnail = new AlbumThumbnail(album);
        $ul.append( thumbnail.render() );
      });
    }

      return $el;
  };

  return AlbumsCollection;

});


// after finishing this, run gulp to recompile templates, then add this file to the index