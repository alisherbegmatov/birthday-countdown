const timeLeft = document.getElementById('time-left')

// Month, Day, Year.
const birthday = new Date('11/03/2021')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown () {
  const today = new Date()
  const timeSpan = birthday - today

  // Milliseconds
  console.log(timeSpan)

  if (timeSpan <= -day) {
    timeLeft.innerHTML = 'HOPE YOU HAD A WONDERFUL BIRTHDAY!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = 'HAPPY BIRTHDAY!'
    clearInterval(timerId)
    return
  }

  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML =
  days + ' DAYS ' + hours + ' HOURS ' + minutes + ' MINUTES ' + seconds + ' SECONDS '
}

timerId = setInterval(countDown, second)
