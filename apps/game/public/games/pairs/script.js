const symbols = [
  'bicycle',
  'leaf',
  'cube',
  'anchor',
  'paper-plane-o',
  'bolt',
  'bomb',
  'diamond',
  'bicycle',
  'leaf',
  'cube',
  'anchor',
  'paper-plane-o',
  'bolt',
  'bomb',
  'diamond',
  'star',
  'star',
  'heart',
  'heart',
  'smile-o',
  'smile-o',
  'circle-o',
  'circle-o',
];
let opened = [],
  match = 0,
  moves = 0,
  starsLeft = 5,
  timer = 120;
const $deck = $('.deck'),
  $moveNum = $('.moves'),
  $starContainer = $('.stars'),
  $timer = $('.timer');

let timerInterval;

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function initGame() {
  const cards = shuffle(symbols);
  $deck.empty();
  opened = [];
  match = 0;
  moves = 0;
  starsLeft = 5;
  $moveNum.html(moves);
  $starContainer.find('li i').removeClass('fa-star-o').addClass('fa-star');

  cards.forEach((card) => {
    $deck.append(`<li class="card"><i class="fa fa-${card}"></i></li>`);
  });

  // Show all cards for 5 seconds to help remember
  $deck.find('.card').addClass('open show');
  setTimeout(() => {
    $deck.find('.card').removeClass('open show');

    // Start timer after preview
    startTimer();
  }, 5000);
}

function startTimer() {
  clearInterval(timerInterval);
  timer = 120;
  updateTimer();
  timerInterval = setInterval(() => {
    timer--;
    updateTimer();
    if (timer <= 0) {
      clearInterval(timerInterval);
      endGame(moves, starsLeft, true);
    }
  }, 1000);
}

function updateTimer() {
  const min = String(Math.floor(timer / 60)).padStart(2, '0');
  const sec = String(timer % 60).padStart(2, '0');
  $timer.text(`${min}:${sec}`);
}

function endGame(moves, starsLeft, failed = false) {
  const title = failed ? 'Game Over!' : 'Congratulations! You Won!';
  const text = failed
    ? 'You lost all stars or time ran out.'
    : `With ${moves} Moves and ${starsLeft} Stars.`;
  Swal.fire({ title, text, icon: failed ? 'error' : 'success' }).then(() =>
    initGame()
  );
  clearInterval(timerInterval);
}

$deck.on('click', '.card:not(.match,.open)', function () {
  if ($('.show').length > 1) return;
  const $this = $(this),
    card = $this[0].innerHTML;
  $this.addClass('open show');
  opened.push(card);

  if (opened.length > 1) {
    if (card === opened[0]) {
      $deck.find('.open').addClass('match animated infinite rubberBand');
      setTimeout(() => {
        $deck
          .find('.match')
          .removeClass('open show animated infinite rubberBand');
      }, 800);
      match++;
    } else {
      $deck.find('.open').addClass('notmatch animated infinite wobble');
      setTimeout(() => {
        $deck.find('.open').removeClass('animated infinite wobble');
      }, 533);
      setTimeout(() => {
        $deck
          .find('.open')
          .removeClass('open show notmatch animated infinite wobble');
      }, 800);

      // Lose a star
      starsLeft--;
      if (starsLeft >= 0)
        $starContainer
          .find('li')
          .eq(starsLeft)
          .find('i')
          .removeClass('fa-star')
          .addClass('fa-star-o');

      if (starsLeft <= 0) {
        endGame(moves, starsLeft, true);
        return;
      }
    }
    opened = [];
    moves++;
    $moveNum.html(moves);
  }

  if (match === symbols.length / 2) {
    endGame(moves, starsLeft);
  }
});

$('.restart').on('click', function () {
  Swal.fire({
    title: 'Restart Game?',
    text: 'Your progress will be lost!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9BCB3C',
    cancelButtonColor: '#EE0E51',
    confirmButtonText: 'Yes, restart!',
  }).then((result) => {
    if (result.isConfirmed) initGame();
  });
});

initGame();
