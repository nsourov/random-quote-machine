getQuote()
setRandomColor()
const quote = $('.quote');
const author = $('.author');
function getQuote(){
  $.ajax({
    url: "http://quotes.stormconsultancy.co.uk/random.json"
  }).done((data) => {
    console.log(data);
    quote.html(`<i class="fa fa-quote-left" aria-hidden="true"></i> ${data.quote}`)
    author.html(`- ${data.author}`)
    $('.twt').attr("href", `https://twitter.com/intent/tweet?text=${data.quote}  - ${data.author}`);
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  $("body").css("background-color", getRandomColor());
}

$('button').click(getQuote)