$(document).ready(function() {
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
  YT.live = {
    countMap: {},
    countMapV: {},
    channelIDs: ["UCGYlNGlloLLZiAL3zBgbMgQ", "UC5MaEdGrolKRJXFdXgD7RAA", "UC6KXCdfpkCGmRTgBPj9hdbQ", "UC2KhNQ3pAmkN6Kepf8ccFZQ", "UCE6Y7GPi7LG3_w0cmBFZRwA", "UCTOWKyc49SY32OYtXontXoQ", "UCHO1It3X8dB0Lfxer_4ev-A", "UCUbhtpmudp_9vfmytdcD3lQ", "UChlEKXoTTTizQN5trVkyNiQ"],
    update: function() {
      var total_count = 0;
      var total_countV = 0;
      var promises = [];
      countMap = this.countMap;
      countMapV = this.countMapV;
      $.each(this.channelIDs, function(x, y) {
          promises.push($.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + y + "&key=" + YT.keyManager.getKey()));
      });
      $.when(promises).done(function(a){
        count = 0;
        $.each(a, function(c, b){
          b.then(function(x){
            countMap[x.items[0].id] =parseInt(x.items[0].statistics.subscriberCount);
            countMapV[x.items[0].id] =parseInt(x.items[0].statistics.viewCount);
            switch(x.items[0].id){
              case "UCGYlNGlloLLZiAL3zBgbMgQ":
                od1eng.update(x.items[0].statistics.subscriberCount);
                od2eng.update(x.items[0].statistics.viewCount);
              break;
              case "UC5MaEdGrolKRJXFdXgD7RAA":
                od1hin.update(x.items[0].statistics.subscriberCount);
                od2hin.update(x.items[0].statistics.viewCount);
              break;
              case "UC6KXCdfpkCGmRTgBPj9hdbQ":
                od1mar.update(x.items[0].statistics.subscriberCount);
                od2mar.update(x.items[0].statistics.viewCount);
              break;
              case "UCHO1It3X8dB0Lfxer_4ev-A":
                od1pun.update(x.items[0].statistics.subscriberCount);
                od2pun.update(x.items[0].statistics.viewCount);
              break;
              case "UChlEKXoTTTizQN5trVkyNiQ":
                od1guj.update(x.items[0].statistics.subscriberCount);
                od2guj.update(x.items[0].statistics.viewCount);
              break;
              case "UCTOWKyc49SY32OYtXontXoQ":
                od1tam.update(x.items[0].statistics.subscriberCount);
                od2tam.update(x.items[0].statistics.viewCount);
              break;
              case "UCE6Y7GPi7LG3_w0cmBFZRwA":
                od1tel.update(x.items[0].statistics.subscriberCount);
                od2tel.update(x.items[0].statistics.viewCount);
              break;
              case "UCUbhtpmudp_9vfmytdcD3lQ":
                od1mal.update(x.items[0].statistics.subscriberCount);
                od2mal.update(x.items[0].statistics.viewCount);
              break;
              case "UC2KhNQ3pAmkN6Kepf8ccFZQ":
                od1ban.update(x.items[0].statistics.subscriberCount);
                od2ban.update(x.items[0].statistics.viewCount);
              break;
              default:
              break;
            }
          })
        })
      });
      this.countMap = countMap;
      this.countMapV = countMapV;
      console.log(countMap);
      $.each(countMap, function(a, b){total_count+=b});
      console.log(countMapV);
      $.each(countMapV, function(a, b){total_countV+=b});
      od1.update(total_count);
      od2.update(total_countV);
    },
    timer: null,
    start: function() {
      this.timer = setInterval(function(e) {
          YT.live.update();
      }, 1000);
  },
    stop: function() {
      clearInterval(this.timer);
  }
  };

  $(function() {
    YT.live.start();
  });
  $(document).ready(function(){
    $(window).focus(function(){
      console.log('started ');
      YT.live.start();
    });
    $(window).blur(function(){
      console.log('paused');
      YT.live.stop();
    });
  });
});
