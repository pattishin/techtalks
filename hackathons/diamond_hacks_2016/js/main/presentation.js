/********
 * Presentation JS
 * Build with Confidence
 *
 * twitter: @pattishin
 *******/ 
var revealConfig = {
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
    ]
};

function initUseAPI() {
  var index = 1;
  $('.star-wars-data a').on('click', function() {
    $.ajax({
      method: 'get',
      url: 'https://swapi.co/api/planets/' + index + '/',
      success: function(response) {
        $('.star-wars-data .response').html('<pre><code data-trim data-noescape>' + JSON.stringify(response) + '</code></pre>'); 
        index++;  
      },
      error: function(error) {
        //reset
        $('.star-wars-data .response').empty();
        index = 1;
      }
    });    
  });
}

//init
initUseAPI();
Reveal.initialize(revealConfig);

