import {Component} from '@angular/core';
import {Md5} from 'md5-typescript';

@Component({
  selector: 'app-md5-encode',
  templateUrl: './md5-encode.component.html',
  styleUrls: ['./md5-encode.component.css']
})
export class Md5EncodeComponent {
  public compute(value: string) {
    return Md5.init(value);
  }
}
