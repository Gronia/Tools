import {Component} from '@angular/core';

@Component({
  selector: 'app-url-encode-decode',
  templateUrl: './url-encode-decode.component.html',
  styleUrls: ['./url-encode-decode.component.css']
})
export class UrlEncodeDecodeComponent {

  public compute(value: string) {
    return encodeURIComponent(value);
  }

  public reverseCompute(value: string) {
    return decodeURIComponent(value);
  }
}
