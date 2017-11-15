/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

var init = function() {
  
  var iwcCallback = function(intent) {
    // define your reactions on incoming iwc events here 
    console.log(intent);

  };

  client = new Las2peerWidgetLibrary("http://ec2-18-220-244-52.us-east-2.compute.amazonaws.com:8086", iwcCallback);

  $('#btnGet').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    getMusic();
  })
  $('#btnSubmit').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    submitMusic();
  })


}

// submitMusic

var submitMusic = function(){

//start variable declaration
   var returnSubmitMusic = null;

//end variable declaration

   var postMusicContent = null;
  client.sendRequest("POST", /music/, postMusicContent, "text/plain", {}, false,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript
 return returnSubmitMusic;
}

// getMusic

var getMusic = function(){

//start variable declaration
   var returnGetMusic = null;

//end variable declaration

   var getMusicContent = null;
  client.sendRequest("GET", /music/, getMusicContent, "text/plain", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript
 return returnGetMusic;
}


$(document).ready(function() {
  init();
});
