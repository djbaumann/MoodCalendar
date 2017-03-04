function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "unhappy.html", true);
  xhttp.send();
}

function postAjax(data) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("POST", "http://54.152.106.227/add_entry");
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { handleResponse(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

function handleResponse(message) {
  alert(message);
}

function g1() {
  document.getElementById('ajaxGet')
  .addEventListener('click', loadDoc());

}
  document.addEventListener('DOMContentLoaded', g1);
//   document.getElementById("ajaxPost1").addEventListener("click", function(){
//       alert("Hello World!");
// });


function a1() {
  document.getElementById('ajaxPost1')
      .addEventListener('click', function() {
        postAjax({'username': "david", 'mood':1});
      alert("I'm Gloomy");});
}
 document.addEventListener('DOMContentLoaded', a1);

 function a2() {
   document.getElementById('ajaxPost2')
       .addEventListener('click', function() {
         postAjax({'username': "david", 'mood':2});
       alert("I'm Unhappy");});
 }
  document.addEventListener('DOMContentLoaded', a2);

  function a3() {
    document.getElementById('ajaxPost3')
        .addEventListener('click', function() {
          postAjax({'username': "david", 'mood':3});
        alert("I'm Content");});
  }
   document.addEventListener('DOMContentLoaded', a3);

   function a4() {
     document.getElementById('ajaxPost4')
         .addEventListener('click', function() {
           postAjax({'username': "david", 'mood':4});
         alert("I'm Happy");});
   }
    document.addEventListener('DOMContentLoaded', a4);

    function a5() {
      document.getElementById('ajaxPost5')
          .addEventListener('click', function() {
            postAjax({'username': "david", 'mood':5});
          alert("I'm Cheerful");});
    }
     document.addEventListener('DOMContentLoaded', a5);









 //
 // document.addEventListener('DOMContentReady', function () {
 // document.getElementById('ajaxPost2')
 //     .addEventListener('click', function() {postAjax({'username': "david", 'mood':2});
 //   });
 //   });
 //
 //   document.addEventListener('DOMContentReady', function () {
 //     document.getElementById('ajaxPost3')
 //     .addEventListener('click', postAjax({'username': "david", 'mood':3}));
 //   });
 //
 // document.addEventListener('DOMContentReady', function () {
 // document.getElementById('ajaxPost4')
 //     .addEventListener('click', postAjax({'username': "david", 'mood':4}));
 //   });
 //
 // document.addEventListener('DOMContentReady', function () {
 // document.getElementById('ajaxPost5')
 //     .addEventListener('click', postAjax({'username': "david", 'mood':5}));
 //   });
