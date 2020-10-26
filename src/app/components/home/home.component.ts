import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUsers: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://randomuser.me/api/?results=10').subscribe((data: any) => {
      console.log('Aquí esta la data', data);
      console.log('El nombre es:', data.results[0].name.first);
      this.myUsers = data.results;
      console.log('MyUsers:', this.myUsers);
    });
  }

  ngOnInit(): void {
  }

}
