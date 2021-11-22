import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {API_URL} from 'src/environments/environment';
import {Scale} from './scales.model';

@Injectable()

export class ScalesApiService {

    constructor(private http: HttpClient) {

    }

    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(new Error(err.message || 'Error: Unable to complete request.'));
        
    }

    getScale(): Observable<Scale[]> {
        return this.http
        .get<Scale[]>(`${API_URL}/`).pipe(
            tap(_ => console.log('fetched')),
            catchError(ScalesApiService._handleError)
        );
        
    }

}