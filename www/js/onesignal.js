document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    
    var notificationOpenedCallback = function(jsonData) {
       
       //alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    
	    // Set your iOS Settings
		
	    window.plugins.OneSignal
	      .startInit(localStorage.getItem('idonesignal'))
	      .handleNotificationOpened(notificationOpenedCallback  )
	      .endInit();

}, false);