function svgpong() {
  const field = document.getElementById('field');
  const playerScoreEl = document.getElementById('playerScore');
  const computerScoreEl = document.getElementById('computerScore');
  const resetBtn = document.getElementById('resetBtn');
  const countdownEl = document.getElementById('countdown');

  if (!field) return alert('SVG not found');

  const box = field.viewBox.baseVal;
  const startX = box.width / 2;
  const startY = box.height / 2;

  function wrapRect(id) {
    const e = document.getElementById(id);
    const r = { width: e.width.baseVal.value, height: e.height.baseVal.value };

    function update() {
      r.right = r.x + r.width;
      r.left = r.x;
      r.top = r.y;
      r.bottom = r.y + r.height;
    }

    Object.defineProperty(r, 'x', {
      get: () => e.x.baseVal.value,
      set: (val) => {
        e.x.baseVal.value = val;
        update();
      },
    });
    Object.defineProperty(r, 'y', {
      get: () => e.y.baseVal.value,
      set: (val) => {
        e.y.baseVal.value = val;
        update();
      },
    });
    Object.defineProperty(r, 'cx', {
      get: () => r.x + r.width / 2,
      set: (val) => {
        r.x = val - r.width / 2;
      },
    });

    update();
    return r;
  }

  const paddleTop = wrapRect('paddleTop');
  const paddleBottom = wrapRect('paddleBottom');
  const ball = (() => {
    const e = document.getElementById('ball');
    const r = { dx: 0, dy: 0 };
    function update() {
      r.right = r.cx + r.r;
      r.left = r.cx - r.r;
      r.top = r.cy - r.r;
      r.bottom = r.cy + r.r;
    }
    Object.defineProperty(r, 'cx', {
      get: () => e.cx.baseVal.value,
      set: (val) => {
        e.cx.baseVal.value = val;
        update();
      },
    });
    Object.defineProperty(r, 'cy', {
      get: () => e.cy.baseVal.value,
      set: (val) => {
        e.cy.baseVal.value = val;
        update();
      },
    });
    Object.defineProperty(r, 'r', {
      get: () => e.r.baseVal.value,
      set: (val) => {
        e.r.baseVal.value = val;
        update();
      },
    });
    update();
    return r;
  })();

  let scorePlayer = 0,
    scoreComputer = 0;
  let inputX = box.width / 2;
  let isRunning = false;
  const computerSpeed = 7;
  const deflectFactor = 0.15;
  const animSpeed = 0.1;

  const matrixPoint = field.createSVGPoint();
  let matrix = field.getScreenCTM().inverse();
  field.addEventListener('mousemove', (e) => {
    matrixPoint.x = e.clientX;
    matrixPoint.y = e.clientY;
    const insvg = matrixPoint.matrixTransform(matrix);
    inputX = insvg.x;
  });
  field.addEventListener('touchmove', (e) => {
    matrixPoint.x = e.touches[0].clientX;
    matrixPoint.y = e.touches[0].clientY;
    const insvg = matrixPoint.matrixTransform(matrix);
    inputX = insvg.x;
  });
  window.onresize = () => {
    matrix = field.getScreenCTM().inverse();
  };

  function startCountdown() {
    let count = 3;
    countdownEl.style.display = 'block';
    countdownEl.textContent = count;
    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.textContent = count;
      } else {
        clearInterval(interval);
        countdownEl.style.display = 'none';
        startBall();
        isRunning = true;
        requestAnimationFrame(animate);
      }
    }, 1000);
  }

  function startBall() {
    ball.cx = startX;
    ball.cy = startY;
    ball.dx = Math.random() > 0.5 ? 5 : -5;
    ball.dy = 5;
  }

  function scored(resetBall = true) {
    ball.cx = startX;
    ball.cy = startY;
    ball.dx = 0;
    ball.dy = 0;
    if (resetBall) setTimeout(startBall, 1000);
  }

  function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScoreEl.textContent = scorePlayer;
    computerScoreEl.textContent = scoreComputer;
    isRunning = false;
    scored(false);
    startCountdown();
  }

  resetBtn.addEventListener('click', resetGame);

  function collide(p) {
    if (ball.right < p.left || ball.left > p.right) return;
    const offset = ball.cx - p.cx;
    if (ball.dy < 0 && ball.top <= p.bottom && ball.bottom > p.top) {
      ball.dy *= -1;
      ball.dx += offset * deflectFactor;
    } else if (ball.dy > 0 && ball.bottom >= p.top && ball.top < p.bottom) {
      ball.dy *= -1;
      ball.dx += offset * deflectFactor;
    }
  }

  const clock = (() => {
    let last = Date.now();
    return {
      reset: () => {
        const now = Date.now();
        const diff = now - last;
        last = now;
        return diff;
      },
    };
  })();

  function animate() {
    if (!isRunning) return;
    const anim_factor = clock.reset() * animSpeed;
    ball.cx += ball.dx * anim_factor;
    ball.cy += ball.dy * anim_factor;

    paddleBottom.cx = inputX;
    if (paddleBottom.left < 0) paddleBottom.x = 0;
    if (paddleBottom.right > box.width)
      paddleBottom.x = box.width - paddleBottom.width;

    // computer AI
    const offset = ball.cx - paddleTop.cx;
    const motivation = Math.min(
      1,
      Math.pow(Math.abs(offset) / (paddleTop.width / 4), 2)
    );
    if (offset > 0) paddleTop.cx += computerSpeed * anim_factor * motivation;
    else paddleTop.cx -= computerSpeed * anim_factor * motivation;
    if (paddleTop.left < 0) paddleTop.x = 0;
    if (paddleTop.right > box.width) paddleTop.x = box.width - paddleTop.width;

    collide(paddleTop);
    collide(paddleBottom);

    if (ball.top <= 0) {
      scorePlayer++;
      playerScoreEl.textContent = scorePlayer;
      scored();
    } else if (ball.bottom >= box.height) {
      scoreComputer++;
      computerScoreEl.textContent = scoreComputer;
      scored();
    }

    if (ball.left <= 0 || ball.right >= box.width) ball.dx *= -1;

    requestAnimationFrame(animate);
  }

  startCountdown();
}
