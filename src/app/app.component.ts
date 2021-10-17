import { Component, VERSION, OnInit } from '@angular/core';
import { from, of, map, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {

    let flag = false;
    let items = of(2, 3, 4);
    items.subscribe((value) => {
      console.log(value);
    });

    items.pipe(
      map( value => value * 2 ),
      tap( ()=> { flag = true; })
    ).subscribe((value) => {
      console.log(value);
    });

    console.log(flag);
  }
}
