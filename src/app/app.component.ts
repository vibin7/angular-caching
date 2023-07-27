import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-caching';
  url = `https://fakestoreapi.com/products`;
  products: any;

  constructor(private httpClient: HttpClient) {}

  onButtonClick() {
    this.httpClient.get(this.url).subscribe(response => {
      this.products = response;
    })
  }


}
