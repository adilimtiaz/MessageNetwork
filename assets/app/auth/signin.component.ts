import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    selector: 'app-signin',
    templateUrl:"./signin.component.html"
})

export class SignInComponent implements OnInit{
    myForm2: FormGroup;

    onSubmit(){
        console.log(this.myForm2);
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