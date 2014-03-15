"use strict";

var Gif = function (frames) {
  this.frames = frames;
  this.length = 0;
  this.offsets = []

  frames.forEach(function (frame) {
    this.offsets.push(this.length);
    this.length += frame.delay;
  }, this);
}

Gif.prototype.frameAt = function (fraction) {
  var offset = fraction * this.length;
  for (var i = 1, l = this.offsets.length; i < l; i++) {
    if (this.offsets[i] > offset) break;
  }
  return i - 1;
}

module.exports = Gif;