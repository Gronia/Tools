import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-url-decode',
  templateUrl: './url-decode.component.html',
  styleUrls: ['./url-decode.component.css']
})
export class UrlDecodeComponent {

  public compute(value: string) {
    return encodeURIComponent(value);
  }

  public reverseCompute(value: string) {
    return decodeURIComponent(value);
  }
}
