import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUsers: any[] = [];
  constructor(private user: RandomUserService) {

  }

  ngOnInit(): void {
    this.user.getRandomUser().subscribe((data: any) => {
      console.log('Aquí esta la data', data);
      console.log('El nombre es:', data.results[0].name.first);
      this.myUsers = data.results;
      console.log('MyUsers:', this.myUsers);
    }, (error) => {
      console.log('El error que se ha producido es:', error);
    });
  }

}
