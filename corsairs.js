//copy-past this in browser console
function nextLevel() {
  if (!started) {
    return false;
  }
  //started = false;
  pause = true;
  level += 1;
  score += 10;
  bulletFrac = bulletFrac
  bulletSpeed = 20;
  if (level % 10 == 0) {
    shipSpeed = 3
  }
  lvlText.text = 'Level '+level
  scoreText.text = score+''
  cham.scale(lvlText, 1.3, 1.3, 20).onComplete = function() {
    cham.scale(lvlText, 1, 1, 20)
  }


  cham.fadeIn(fade, 10).onComplete = function() {
    started = false;

    pause = false;

    cham.fadeOut(btnswitch, 10)
    cham.fadeIn(btnplay, 10)

    resetLevel()
    cham.fadeOut(fade, 40)
  }
}
