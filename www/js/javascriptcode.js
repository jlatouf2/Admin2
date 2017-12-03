"use strict";
//window.alert('message');

document.addEventListener("deviceready", function() {
  //  window.alert("device ready");

  }, false);



function myFunction() {
console.log('worked');

document.addEventListener("deviceready", function() {
    alert("device ready");
try {
if (window.cordova.platformId == "browser") {
         var appId = xxxx6138889xxxx;
         var version = "v2.0";      //tried for v.2.0 to v.2.7
        facebookConnectPlugin.browserInit(appId, version);
}
 var fbLoginSuccess = function (userData) {
      //console.log("UserInfo: " + JSON.stringify(userData));
      alert("worked" + JSON.stringify(userData));
      //alert("worked" + userData.email.userID);
    //  alert("worked" + userData);

 }
  facebookConnectPlugin.login(["email" ],
      fbLoginSuccess,
      function (error) { alert("" + error) } );
} catch (e){
  alert(e);
}
}, false);
}

//'/me?fields=email', ["email"]
//              localStorage.setItem("StoreName", $scope.grabStorename);
//  console.log(localStorage.getItem("StoreName"));

function getUserInfo22(){
    facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'],
    function (result) {
    console.log(result);
    },
    function (error) {
    console.log(error);
    });
}

      /*        THIS WORKED!!!!         */

function myFunction3() {
    document.addEventListener("deviceready", function() {
        alert("device ready");

    try {
    if (window.cordova.platformId == "browser") {
             var appId = xxxx6138889xxxx;
             var version = "v2.0";      //tried for v.2.0 to v.2.7
            facebookConnectPlugin.browserInit(appId, version);
    }
    var fbLoginSuccess = function (userData) {
        //alert(userData.email);
        alert("worked" + JSON.stringify(userData));

      facebookConnectPlugin.getAccessToken(function(token) {
        alert("Token: " + token);
      });
    }

    facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'], fbLoginSuccess,
      function (error) {
        console.error(error)
      }
    );
      } catch (e){
      alert(e);
    }
    }, false);

}


function myFunction4() {

  document.addEventListener("deviceready", function() {
      alert("device ready");

  try {
  if (window.cordova.platformId == "browser") {
           var appId = xxxx6138889xxxx;
           var version = "v2.0";      //tried for v.2.0 to v.2.7
          facebookConnectPlugin.browserInit(appId, version);
  }
  var fbLoginSuccess = function (userData) {
      //alert(userData.email);
      alert("worked" + JSON.stringify(userData));

    facebookConnectPlugin.getAccessToken(function(token) {
      alert("Token: " + token);
      localStorage.setItem("Token", token);
    });
  }

  facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'], fbLoginSuccess,
    function (error) {
      console.error(error)
    }
  );
    } catch (e){
    alert(e);
  }
  }, false);


}

/*
HAVE TO EITHER MAKE A BACKEND FOR THIS DATA TO CHECK, OR COULD SEE IF IT FITS
IN WITH THE REGULAR SIGN IN THAT I BUILT ALREADY***
*/

//  console.log(localStorage.getItem("StoreName"));

function myFunction6(){
alert(localStorage.getItem("Token"));

}


/*
$http.post('/storeName', {postal: $scope.postal }).success(function( data)
               {
                 $scope.numberLinesZero = false;
                 console.log("Data is returned: " + data);
                 $scope.countries = data;
               }, function(posts) {});


function myFunction5(){
    facebookConnectPlugin.login(['email', 'public_profile'],
    fbLoginSuccess,
    function (error){
    console.log(error);
    }
    );
}

function getUserInfo(){
  facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'],
  function (result) {
  console.log(result);
  },
  function (error) {
  console.log(error);
  });
}


_below is what I did and it works
function initApp(){
facebookConnectPlugin.login(['email', 'public_profile'],
fbLoginSuccess,
function (error){
console.log(error);
}
);
}
function getUserInfo(){
facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'],
function (result) {
console.log(result);
},
function (error) {
console.log(error);
});
}



function myFunction2() {

facebookConnectPlugin.getLoginStatus(
  function(response){
      if(response.status === 'connected'){
          me.logged_in = true;
      }else{
          me.logged_in = false;
      }
  },
  function(err){
      me.logged_in = false;
      alert('Error while trying to check login status');
      RequestsService.sendData(err);
  }
);
}

*/
