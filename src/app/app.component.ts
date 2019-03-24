import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subscription = { name: '', phone: '', email: '', dni: '' };
  submitted = false;
  subscriptionForm: FormGroup;

  constructor(private httpService: HttpService, private toastr: ToastrService){}

  ngOnInit() {
    this.subscriptionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dni: new FormControl('', [Validators.required, Validators.pattern('\\d{3,8}-[\\d|kK]{1}')])
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.subscriptionForm.controls;
  }

  postSubscriptions() {
    this.submitted = true;
    if (this.formIsValid()) {
      this.httpService.post_subscriptions(this.subscriptionForm.value).subscribe(apiResult => {
        if (apiResult.success) {
          this.toastr.success(apiResult.message);
          this.submitted = false;
          this.subscriptionForm.reset();
        } else {
          this.toastr.error(apiResult.message);
        }
      });
    }
  }

  formIsValid() {
    if (this.subscriptionForm.invalid) {
      this.toastr.error('Ups, algo anda mal. Por favor dale un ojo a los campos e intenta de nuevo.');
      return false;
    }
    return true;
  }
}
