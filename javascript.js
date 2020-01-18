var quotes = [
  'Success is not final, failure is not fatal: it is the courage to continue that counts.<br> - Winston Churchill',
  'It’s no use going back to yesterday, because I was a different person then.<br> - Lewis Carroll',
  'Well-behaved women seldom make history.<br> - Laurel Thatcher Ulrich',
  'Do what you feel in your heart to be right – for you’ll be criticized anyway.<br> - Eleanor Roosevelt',
  'Happiness is not something ready made. It comes from your own actions.<br> - Dalai Lama',
  'What lies behind us and what lies before us are tiny matters compared to what lies within us.<br> - Ralph Waldo Emerson',
  'Whatever you are, be a good one.<br> - Abraham Lincoln',
  'Isn\'t it nice to think that tomorrow is a new day with no mistakes in it yet?<br> - L.M. Montgomery',
  'Pain is inevitable. Suffering is optional.<br> - Haruki Murakami',
  'Fantasy is hardly an escape from reality. It\'s a way of understanding it.<br> - Lloyd Alexander',
  'Do not go where the path may lead, go instead where there is no path and leave a trail.<br> - Ralph Waldo Emerson',
  'Life\'s a bitch. You\'ve got to go out and kick ass.<br> - Maya Angelou',
  'I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.<br> - Agatha Christie',
  'People say nothing is impossible, but I do nothing every day.<br> - A.A. Milne',
  'You never fail until you stop trying.<br> - Albert Einstein',
  'No one gets remembered for the things they didn\'t do.<br> - Frank Turner',
  'Always look on the bright side of life.<br> - Jezus',
  'Great heroes need great sorrows and burdens, or half their greatness goes unnoticed. It is all part of the fairy tale.<br> - Peter S. Beagle',
  'Don\'t let the bastards grind you down.<br> - Margaret Atwood'
]


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('motivationDisplay').innerHTML = quotes[randomNumber];
}
