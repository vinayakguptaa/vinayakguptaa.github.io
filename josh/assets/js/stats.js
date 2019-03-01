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
          }
        })
      })
    });
    this.countMap = countMap;
    this.countMapV = countMapV;
    $.each(countMap, function(a, b){total_count+=b});
    $.each(countMapV, function(a, b){total_countV+=b});
    od1.update(total_count);
    od2.update(total_countV);
  },/*
  profiles: function() {
    var = promise[];
    $.each(this.channelIDs, function(x, y) {
        promise.push($.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet.thumbnails&id=" + y + "&key=" + YT.keyManager.getKey()));
    });
    $when(promise).done(function(a) {
      getElementById("eng").src=a.items[0].snippet.thumbnails.default.url;
    });
  };*/
  timer: null,
  start: function() {
    //YT.live.profiles();
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
