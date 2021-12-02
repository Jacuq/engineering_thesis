import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {API_URL} from 'src/environments/environment';
import {Interval, Scale, Chord} from './theory.models';

@Injectable()

export class TheoryApiService {

    constructor(private http: HttpClient) {

    }

    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(new Error(err.message || 'Error: Unable to complete request.'));
        
    }

    getScale(rootNote: string, name: string): Observable<Scale[]> {
        return this.http
        .get<Scale[]>(`${API_URL}/scale/${rootNote}/${name}`).pipe(
            tap(_ => console.log('fetched')),
            catchError(TheoryApiService._handleError)
        );
        
    }

    getChord(rootNote: string, name: string): Observable<Chord[]> {
        return this.http
        .get<Chord[]>(`${API_URL}/chord/${rootNote}/${name}`).pipe(
            tap(_ => console.log('fetched')),
            catchError(TheoryApiService._handleError)
        );
        
    }

    getInterval(rootNote: string, name: string): Observable<Interval[]> {
        return this.http
        .get<Interval[]>(`${API_URL}/interval/${rootNote}/${name}`).pipe(
            tap(_ => console.log('fetched')),
            catchError(TheoryApiService._handleError)
        );
        
    }

}