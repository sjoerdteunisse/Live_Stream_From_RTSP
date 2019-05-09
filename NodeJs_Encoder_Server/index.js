var express = require('express')
var WebSocket = require('ws')
var app = express()
//var jsmpeg = require('jsmpeg');


Stream = require('node-rtsp-stream');
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.86.188:8554/live.sdp',
  wsPort: 9000,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30,
    '-f': 'mpegts',
    '-codec:a': 'mp2',
    '-vcodec': 'mpeg1video'
    //'-b': '800k',
    //'-s': '640x480',// options with required values specify the value after the key
    //'codec-v': 'mpeg1video'
  }
});

app.get('/', function (req, res) {
  client = new WebSocket('ws://localhost:9000');
  // player = new jsmpeg(client, {
  //   canvas: canvas // Canvas should be a canvas DOM element
  // });
})
 
app.listen(3000)