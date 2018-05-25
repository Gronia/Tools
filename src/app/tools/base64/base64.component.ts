import {Component} from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component {

  public compute(value: string) {
    return btoa(value);
  }

  public reverseCompute(value: string) {
    return atob(value);
  }
}
