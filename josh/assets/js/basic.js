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
