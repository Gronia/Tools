import {Routes} from '@angular/router';
import {UrlEncodeDecodeComponent} from './tools/url-encode-decode/url-encode-decode.component';
import {Base64DecodeEncodeComponent} from './tools/base64/base64-decode-encode.component';
import {Md5EncodeComponent} from './tools/md5-encode/md5-encode.component';
import {UrlParseComponent} from './tools/url-parse/url-parse.component';
import {HtmlEncodeDecodeComponent} from './tools/html-encode-decode/html-encode-decode.component';

export const routes: Routes = [
  {
    path: 'url-encode-decode',
    component: UrlEncodeDecodeComponent,
    data: {
      title: 'URL Decoder'
    }
  },{
    path: 'url-parser',
    component: UrlParseComponent,
    data: {
      title: 'URL Parser'
    }
  }, {
    path: 'base64-encode-decode',
    component: Base64DecodeEncodeComponent,
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
    path: 'html-encode-decode',
    component: HtmlEncodeDecodeComponent,
    data: {
      title: 'HTML Encode Decode'
    }
  }, {
    path: '',
    redirectTo: 'url-encode-decode',
    pathMatch: 'full'
  }
];
