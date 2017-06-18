// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function changeColors(){
  setTimeout(function(){
      document.getElementById('first').style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";
      setTimeout(function(){  
        document.getElementById('second').style.color = 'blue';
        setTimeout(function(){
          document.getElementById('third').style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";
          setTimeout(function(){
          document.getElementById('fourth').style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";
          }, 1000); 
        }, 1000);
      }, 1000);
    }, 1000);
}
// JS Equivalent: Jquery

function getData(){
  var registeredBizDiv = document.getElementById('registeredbusiness');

  $.get('https://data.sfgov.org/resource/vbiu-2p9h.json', function(response){
      console.log(response); // Make sures it doesnt just bypass if something goes wrong. - all because JS is asynchronous 
      var htmlString = '';
      for (var i = 0; i < response.length; i++) {
        var business = response[i];
        htmlString += '<div>';
        htmlString += '<h1>' + business.dba_name + '</h1>';
        htmlString += '<h4>' + business.city + '</h1>';
        htmlString += '<h4>' + business.naic_code_description + '</h1>';
        htmlString += '<h4>' + business.ttxid + '</h1>';
        htmlString += '<h4>' + business.dba_name + '</h1>';
        htmlString += '</div>';
      }
      registeredBizDiv.innerHTML = htmlString;
    }
  );
}

