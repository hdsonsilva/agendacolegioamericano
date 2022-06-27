var galery = {
  // galerylication Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    //this.loadPhotos();
  },

  requestAuthorization: function () {

    var self = this;
    
    cordova.plugins.photoLibrary.requestAuthorization(
      function () {
        // Retry
        self.loadPhotos();
        
      },
      function (err) {
        alert('Permissão à galeria não concedida. Permita acesso à galeria.');

        // TODO: explain to user why you need the permission, and continue when he agrees

        // Ask user again
        self.requestAuthorization();

      }, {
        read: true,
        write: false
      }
    );

  },

  loadPhotos: function () {

    var self = this;

    var gallery = $('.positionlibrary');

    cordova.plugins.photoLibrary.getLibrary(
      function (chunk) {
        var library = chunk.library;
        // Here we have the library as array
        var i = 0 ;
        library.forEach(function (libraryItem) {

          if (libraryItem.id.split(';/').length > 0) {
            url = 'cdvfile://' + libraryItem.id.split(';')[1];
          }
          
          //var image = "<img src='"+libraryItem.thumbnailURL+"' style='margin: 5px; width: 100%;'>";

          if(i == 0){
            console.log(url);
            i++;
          }
          window.resolveLocalFileSystemURL(url, function(entry) {
            var nativePath = entry.toURL();
            console.log('Native URI: ' + nativePath);
            var image = "<img src='"+nativePath+"' style='margin: 5px; width: 100%;'>";
                gallery.append(image);   
            });
          return true;          
        });

      },
      function (err) {
        if (err.startsWith('Permission')) {

          alert('Por favor, dê permissão ao app, sem ela não é possivel continuar.');

          // TODO: explain to user why you need the permission, and continue when he agrees

          self.requestAuthorization();

        } else { // Real error
          alert('Erro ao buscar fotos: ' + err);
        }
      }, {
        chunkTimeSec: 0.3,
      }
    );

  }
};

/*setTimeout(function(){

  galery.initialize();

  galery.requestAuthorization();

  galery.loadPhotos();

  alert('Ok');
}, 1000);*/