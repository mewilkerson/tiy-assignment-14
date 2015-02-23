var App = (function(){

function App() {

}

App.prototype = {

  getAlbumData: function() {
    _.chain(this.data)
    .pluck("album_name")
    .uniq()
    .map(function(albumName) {
      return {album_name: albumName};
    });


    _.each(albumData, function(album) {

      var albumName = album.album_name;

      var photo = _.find(this.data, function(photo){
        photo.album_name === albumName;
      });

      album.

    });

  },

},

showAlbums: function() {

}



})