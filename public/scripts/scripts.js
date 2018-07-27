var BEGIN_TIME = new Date('2018-07-28T11:00:00.000Z');
var interval;
var countdown = $('#countdown');;

$(document).ready(loadTemplate);

function loadTemplate() {
  var hash = getUrlParameter('hash');

  if (hash && timeDiff() < 0) {
    $('section').show();
    $('#task').load('templates/' + hash + '.html');
    return;
  }

  countdownCheck();
  interval = setInterval(countdownCheck, 1000);
}

function countdownCheck() {
  if (!timeDiff()) {
    clearInterval(interval);
    countdown.remove();
    $('section').show();
  }

  renderTimeDiff(timeDiff());
}

function renderTimeDiff(diff) {
  var h = diff / 3600 >> 0
  var m = diff % 3600 / 60 >> 0
  var s = diff % 60;
  countdown.text(`Come back later! Challenge starts in: ${pad(h)}:${pad(m)}:${pad(s)}`);
}

function pad(number) {
  return ('0000' + number).slice(-2);
}

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function timeDiff() {
  return Math.floor((BEGIN_TIME - new Date()) / 1000);
}