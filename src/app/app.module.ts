import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UrlDecodeComponent} from './tools/url-decode/url-decode.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import * as Routing from './app.routing';
import {ToolComponent} from './component/box/tool.component';
import {FormsModule} from '@angular/forms';
import {Base64Component} from './tools/base64/base64.component';
import {Md5EncodeComponent} from './tools/md5-encode/md5-encode.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlDecodeComponent,
    Base64Component,
    Md5EncodeComponent,
    NavBarComponent,
    ToolComponent
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
