import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    console.log(route);
    
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // // route.data includes both `data` and `resolve`
    // const user = route.data.pipe(map(d => d.user));
  }

  ngOnInit(): void {
  }

}
