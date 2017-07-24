import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class MessageService{
    messages: Message[] =[];
    isEdited=new EventEmitter<Message>();

    constructor(private http: Http){}

    addMessage(msg: Message){
        const body=JSON.stringify(msg);
        const headers=new Headers({'Content-Type': 'application/json'});
        //Converts Observable to json
        return this.http.post('http://localhost:3000/messages', body, {headers: headers})
            .map((resp: Response)=> {
                const result = resp.json();
                const msg2 = new Message(result.obj.content, "Adil", result.obj._id, null);
                this.messages.push(msg2);
            })
            .catch((err: Response)=>
            Observable.throw(err.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/messages')
            .map((resp: Response)=>{
                const msgs=resp.json().obj;
                console.log(resp.json());
                let trsfmdmsgs: Message[]=[];
                for( let msg of msgs){
                    trsfmdmsgs.push(new Message(msg.content,'Dummy',msg._id, null));
                }
                this.messages=trsfmdmsgs;
                return trsfmdmsgs;
            })
            .catch((err: Response)=>
                Observable.throw(err.json()));
    }

    editMessage(message: Message){
        this.isEdited.emit(message);
    }

    updateMessage(msg: Message){
        const body=JSON.stringify(msg);
        const headers=new Headers({'Content-Type': 'application/json'});
        //Converts Observable to json
        return this.http.patch('http://localhost:3000/messages/' + msg.messageId, body, {headers: headers})
            .map((resp: Response)=>
                resp.json()
            )
            .catch((err: Response)=>
                Observable.throw(err.json()));
    }

    deleteMessage(msg: Message){
        this.messages.splice(this.messages.indexOf(msg),1);
        return this.http.delete('http://localhost:3000/messages/' + msg.messageId)
            .map((resp: Response)=>
                resp.json()
            )
            .catch((err: Response)=>
                Observable.throw(err.json()));
    }
}