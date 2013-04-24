/* I am not sure how to present javascript and what kind of elements to use such as < * > / and such 
so I am not linking this file to html and keeping javascript until I learn a bit more. 
some of it might very well belong here. */



/*  Modernizr enables HTML5 elements & feature detects for optimal performance. */
	<script src="js/libs/modernizr-2.5.3.min.js"></script>
	
/*  font */
  <script src="http://use.edgefonts.net/league-gothic.js"></script>
  
  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

  <!-- scripts concatenated and minified via build script -->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts -->

  <!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
       mathiasbynens.be/notes/async-analytics-snippet -->
  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>

<script src='file.js'></script> <!-- src="javascriptgoeshere.js" -->
