import {Component} from '@angular/core';

@Component({
  selector: 'app-html-encode-decode',
  templateUrl: './html-encode-decode.component.html',
  styleUrls: ['./html-encode-decode.component.css']
})
export class HtmlEncodeDecodeComponent {
  public compute(value: string) {
    return $('<div/>').text(value).html();
  }

  public reverseCompute(value: string) {
    return $('<div/>').html(value).text();
  }
}
