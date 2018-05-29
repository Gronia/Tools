import {Component} from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64-decode-encode.component.html',
  styleUrls: ['./base64-decode-encode.component.css']
})
export class Base64DecodeEncodeComponent {

  public compute(value: string) {
    return btoa(value);
  }

  public reverseCompute(value: string) {
    return atob(value);
  }
}
