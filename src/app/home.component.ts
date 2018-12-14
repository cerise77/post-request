import { Component} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
//import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})

export class HomeComponent {


  /*user: User=new User(); // данные вводимого пользователя

  receivedUser: User; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(user: User){
      this.httpService.postData(user)
              .subscribe(
                  (data: User) => {this.receivedUser=data; this.done=true;},
                  error => console.log(error)
              );
  }*/

  onSubmit(form: NgForm){
        console.log(form);
    }

  /*constructor(private http:Http) {
    this.user = {
      name: 'some name'

    }
  onSubmit() {
    this.http.post('https://www.getpostman.com/apps', JSON.stringify(this.user))
        .subscribe();
  }*/

  /*onSubmit(form: NgForm){
        console.log(form);
    }*/



    /*myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({

            "userPassword": new FormControl("", [
                                Validators.required,
                                Validators.pattern("[A-Za-z]")
                            ]),
            "userEmail": new FormControl("", [
                                Validators.required,
                                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
                            ])
        });
    }

    submit(){
        console.log(this.myForm);
    }*/
}
