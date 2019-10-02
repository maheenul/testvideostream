import { Component, OnInit } from '@angular/core';


//declare var jsmpegPlayer: any;

import * as JSMpeg from 'jsmpeg-player';





@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //new JSMpeg.VideoElement('#videoWrapper', 'ws://172.16.63.172:9999');
    console.log('test')
    JSMpeg.VideoElement('#videoWrapper','ws://172.16.63.172:9999')
  }

  onClick(event){
    event.target.pause;
    console.log(event);
  }
  



}
