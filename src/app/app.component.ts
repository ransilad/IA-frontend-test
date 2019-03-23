import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public subscription = { name: '', phone: '', email: '', dni: '' };

  constructor(private httpService: HttpService){}

  postSubscriptions() {
    this.httpService.post_subscriptions(this.subscription).subscribe(apiResult => {
      if (apiResult.success) {
        alert('Se grabó exitosamente');
        this.subscription = { name: '', phone: '', email: '', dni: '' };
      } else {
        console.log('Error');
      }
    });
  }
}
