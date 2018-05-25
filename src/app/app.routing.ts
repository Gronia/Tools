import {Routes} from '@angular/router';
import {UrlDecodeComponent} from './tools/url-decode/url-decode.component';
import {Base64Component} from './tools/base64/base64.component';
import {Md5EncodeComponent} from './tools/md5-encode/md5-encode.component';

export const routes: Routes = [
  {
    path: 'url-decode',
    component: UrlDecodeComponent,
    data: {
      title: 'URL Decoder'
    }
  }, {
    path: 'base64-encode-decode',
    component: Base64Component,
    data: {
      title: 'Base64 Encode Decode'
    }
  }, {
    path: 'md5-encode',
    component: Md5EncodeComponent,
    data: {
      title: 'MD5 Encode'
    }
  }, {
    path: '',
    redirectTo: 'url-decode',
    pathMatch: 'full'
  }
];
