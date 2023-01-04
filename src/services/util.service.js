export const utilService = {
  makeId,
  formatDate,
  createDate,
  sortByDate,
  sortByName,
};

function makeId(length = 6) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function createDate(dateStr, failPopup) {
  try {
    const date = dateStr.split(',');
    const dateStrToArr = date[0].split('/');
    dateStrToArr[1] = +dateStrToArr[1] - 1;
    const time = date[1].split(':');
    return new Date(...dateStrToArr.reverse(), ...time);
  } catch (e) {
    failPopup(
      'Failed to save event',
      'Date format have to be DD/MM/YY,HH:MM',
      'fail'
    );
  }
}

function formatDate(d) {
  d = new Date(d);
  return (
    ('0' + d.getDate()).slice(-2) +
    '/' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '/' +
    d.getFullYear() +
    ', ' +
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2)
  );
}

function sortByDate(arr, property) {
  const mul = property === 'endDate' ? -1 : 1;
  return arr.sort(function (a, b) {
    return (
      (new Date(a[property]).getTime() - new Date(b[property]).getTime()) * mul
    );
  });
}

function sortByName(arr) {
  return arr.sort(function (a, b) {
    return a.nameOfEvent.localeCompare(b.nameOfEvent, 'he');
  });
}
