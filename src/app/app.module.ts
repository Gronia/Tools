import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UrlEncodeDecodeComponent} from './tools/url-encode-decode/url-encode-decode.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import * as Routing from './app.routing';
import {ToolComponent} from './component/box/tool.component';
import {FormsModule} from '@angular/forms';
import {Base64DecodeEncodeComponent} from './tools/base64/base64-decode-encode.component';
import {Md5EncodeComponent} from './tools/md5-encode/md5-encode.component';
import { UrlParseComponent } from './tools/url-parse/url-parse.component';
import { HtmlEncodeDecodeComponent } from './tools/html-encode-decode/html-encode-decode.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlEncodeDecodeComponent,
    Base64DecodeEncodeComponent,
    Md5EncodeComponent,
    NavBarComponent,
    ToolComponent,
    UrlParseComponent,
    HtmlEncodeDecodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routing.routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
