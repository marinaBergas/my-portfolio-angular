import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.isLoggedIn()) {
            const authToken = this.authService.getAuthorizationToken();
            req = req.clone({
                setHeaders:
                    { Authorization: authToken }
                }
            );
        }
        
        return next.handle(req);
    };
}

