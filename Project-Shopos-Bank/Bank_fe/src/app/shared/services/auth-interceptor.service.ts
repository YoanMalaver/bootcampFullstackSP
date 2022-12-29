import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    request = req.clone({
      setHeaders: {
        token: '12345',
      },
    });

    return next.handle(request);
  }
}
