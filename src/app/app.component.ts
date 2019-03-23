import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public subscription = { name: '', phone: '', email: '', dni: '' };

  constructor(private httpService: HttpService, private toastr: ToastrService){}

  postSubscriptions() {
    this.httpService.post_subscriptions(this.subscription).subscribe(apiResult => {
      if (apiResult.success) {
        this.toastr.success(apiResult.message);
        this.subscription = { name: '', phone: '', email: '', dni: '' };
      } else {
        this.toastr.error(apiResult.message);
      }
    });
  }
}
