//************Defining Odometers***************
  od1 = new Odometer({
    el: document.querySelector('#totalsubs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2 = new Odometer({
    el: document.querySelector('#totalviews'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1eng = new Odometer({
    el: document.querySelector('#eng-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2eng = new Odometer({
    el: document.querySelector('#eng-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1hin = new Odometer({
    el: document.querySelector('#hin-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2hin = new Odometer({
    el: document.querySelector('#hin-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1mar = new Odometer({
    el: document.querySelector('#mar-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2mar = new Odometer({
    el: document.querySelector('#mar-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1pun = new Odometer({
    el: document.querySelector('#pun-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2pun = new Odometer({
    el: document.querySelector('#pun-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1guj = new Odometer({
    el: document.querySelector('#guj-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2guj = new Odometer({
    el: document.querySelector('#guj-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1tam = new Odometer({
    el: document.querySelector('#tam-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2tam = new Odometer({
    el: document.querySelector('#tam-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1tel = new Odometer({
    el: document.querySelector('#tel-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2tel = new Odometer({
    el: document.querySelector('#tel-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1mal = new Odometer({
    el: document.querySelector('#mal-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2mal = new Odometer({
    el: document.querySelector('#mal-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od1ban = new Odometer({
    el: document.querySelector('#ban-subs'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
  od2ban = new Odometer({
    el: document.querySelector('#ban-view'),
    value: 0,
    format: '(,ddd).dd',
    theme: 'minimal'
  });
//*************End of Odometers****************
  var YT = {};
  YT.keyManager = {
    keys: ["AIzaSyCirzn_euhI10MY2_Mo1gQjgult6_Rw4CY", "AIzaSyBh9NX-IZVLyk6C2nt448dYYuwmIMdPvpI", "AIzaSyBR1Fz9C-5PM1-56g6l3fc3jTNxeVioIrI", "AIzaSyDgNPwHuae7dtgwmZwhpdKDC8xYahugz-w", "AIzaSyCuXXjTVn79AENIQiJfRSYDLzeZIzZyqg4"],
    keyIndex: 0,
    getKey: function() {
      this.keyIndex = (this.keyIndex + 1) % (this.keys.length);
      return this.keys[this.keyIndex];
    },
    shuffleKeys: function() {
      this.keys.shuffle();
    },
  }
  
