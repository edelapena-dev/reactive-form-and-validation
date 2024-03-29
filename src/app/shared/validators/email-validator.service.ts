import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log(email)
    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay( 2000 )
    //     )
    // }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;
        console.log(email)

        const httpCallObservable = new Observable<ValidationErrors | null>((suscriber) => {
            console.log({ email });
            if (email === 'esteban.delapenia23@gmail.com') {
                suscriber.next({ emailTaken: true });
                suscriber.complete();
            }

            suscriber.next(null);
            suscriber.complete();
        }).pipe(
            delay(3000)
        );
        return httpCallObservable;
    }
}
