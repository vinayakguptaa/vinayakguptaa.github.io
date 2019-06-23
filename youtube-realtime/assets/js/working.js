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
