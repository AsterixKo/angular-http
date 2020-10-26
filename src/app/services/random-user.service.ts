import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  myUsers: any[] = [];

  constructor(private http: HttpClient) {

  }

  getRandomUser() {
    //este headers es un ejemplo, no significa nada para la api de randomuser
    const headers = new HttpHeaders({
      Autorization: 'Bearer 737373873ub4hgh343434'// lo tipico es Autorization
    });

    //Petición con headers personalizadas
    return this.http.get('https://randomuser.me/api/?results=1', { headers });
    //petición normal
    // return this.http.get('https://randomuser.me/api/?results=1');
    // this.http.get('https://randomuser.me/api/?results=10').subscribe((data: any) => {
    //   console.log('Aquí esta la data', data);
    //   console.log('El nombre es:', data.results[0].name.first);
    //   this.myUsers = data.results;
    //   console.log('MyUsers:', this.myUsers);
    // });
  }
}
