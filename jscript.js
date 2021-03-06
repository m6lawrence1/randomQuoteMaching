var quote;
var author;

function getQuote() {
    
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function (data) {
            var post = data.shift(Math.floor((Math.random() * 300) + 1)); // The data is an array of posts. Grab a random post.
            $('#quote-title').text(post.title);
            $('#quote-content').html(post.content);
            var quote = $('#quote-content').text().trim(); //trim removes any white spaces on both sides of string
            var author = $('#quote-title').text();
          
      
            $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ~ ' + author));
        },
        cache: false
    });
    
    
}
$(function () {
    getQuote();
    $('#get-another-quote-button').on('click', getQuote);
    $('#tweet-quote').on('click', function () {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));       
    });
});
