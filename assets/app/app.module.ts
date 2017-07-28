import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageListCompent} from "./msg/message.list.component";
import {MessageComponent} from "./msg/message.component";
import {MessageInputComponent} from "./msg/message.input.component";
import {MessagesComponent} from "./msg/messages.component";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SignUpComponent} from "./auth/signup.component";
import {SignInComponent} from "./auth/signin.component";
import {HttpModule} from "@angular/http";
import {AuthSevice} from "./auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        MessageListCompent,
        MessageInputComponent,
        MessageComponent,
        MessagesComponent,
        AuthComponent,
        HeaderComponent,
        LogoutComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
    providers: [AuthSevice],
    bootstrap: [AppComponent]
})
export class AppModule {

}