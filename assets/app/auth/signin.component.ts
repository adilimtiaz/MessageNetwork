import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthSevice} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-signin',
    templateUrl:"./signin.component.html"
})

export class SignInComponent implements OnInit{
    myForm2: FormGroup;

    constructor(private authService: AuthSevice, private router: Router){}

    onSubmit(){
        const user=new User(this.myForm2.value.email, this.myForm2.value.password);
        this.authService.signin(user)
            .subscribe(
              data=>{
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('userId',data.userId);
                  this.router.navigateByUrl('/');
              },
                error=>console.log(error)
            );
        this.myForm2.reset();
    }



    ngOnInit(){
        this.myForm2=new FormGroup({
            email: new FormControl(null, [Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            password: new FormControl(null, Validators.required)
        });
    }

}