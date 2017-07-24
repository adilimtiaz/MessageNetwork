import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";



@Component({
    selector: 'app-msg-input',
    templateUrl: './message.input.component.html'
})

export class MessageInputComponent implements OnInit{
    message:Message;

    constructor (private messageService: MessageService) {}

    onSave(form: NgForm){
        if(this.message){
            this.message.content=form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    data =>console.log(data),
                    err =>console.error(err)
                );
            this.message=null;
        }else{
            const message=new Message(form.value.content, "Adil");
            this.messageService.addMessage(message)
                .subscribe(
                    data =>console.log(data),
                    err =>console.error(err)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm){
        form.resetForm();
        this.message=null;
    }

    ngOnInit(){
        this.messageService.isEdited.subscribe(
            (msg: Message) =>this.message=msg
        );

    }
}