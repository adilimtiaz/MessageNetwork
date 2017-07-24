import { Component } from '@angular/core';
import {Message} from "./msg/message.model";
import {MessageService} from "./msg/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})

//Always use single quotes when using constructors
export class AppComponent {

}