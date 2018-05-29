import {Component} from '@angular/core';

import * as URI from 'urijs';

@Component({
  selector: 'app-url-parser',
  templateUrl: './url-parse.component.html',
  styleUrls: ['./url-parse.component.css']
})
export class UrlParseComponent {
  public compute(value: string) {
    const uri: any = new URI(value);
    let response = '';

    response += 'protocol:  ' + uri.protocol() + '\n';
    response += 'username:  ' + uri.username() + '\n';
    response += 'password:  ' + uri.password() + '\n';
    response += 'hostname:  ' + uri.hostname() + '\n';
    response += 'port:      ' + uri.port() + '\n';
    response += 'full host: ' + uri.host() + '\n';
    response += 'userinfo:  ' + uri.userinfo() + '\n';
    response += 'authority: ' + uri.authority() + '\n';
    response += 'origin:    ' + uri.origin() + '\n';
    response += 'domain:    ' + uri.domain() + '\n';
    response += 'subdomain: ' + uri.subdomain() + '\n';
    response += 'tld:       ' + uri.tld() + '\n';
    response += 'pathname:  ' + uri.pathname() + '\n';
    response += 'directory: ' + uri.directory() + '\n';
    response += 'filename:  ' + uri.filename() + '\n';
    response += 'suffix:    ' + uri.suffix() + '\n';
    response += 'query:     ' + uri.query() + '\n';
    response += 'hash:      ' + uri.hash() + '\n';
    response += 'fragment:  ' + uri.fragment() + '\n';
    response += 'resource:  ' + uri.resource() + '\n';

    return response;
  }
}
