import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:String;
  isvalid :boolean = true;
    room:String = "Lobby";
    messageText:String ;
    messageArray:Array<{user:String,message:String}> = [];
    constructor(private _chatService:ChatService){
        this._chatService.newUserJoined()
        .subscribe(data=> this.messageArray.push(data));


        this._chatService.userLeftRoom()
        .subscribe(data=>this.messageArray.push(data));

        this._chatService.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));
    }

    join(){
        this._chatService.joinRoom({user:this.user, room:this.room});
        this.isvalid = false;
    }

    leave(){
        this._chatService.leaveRoom({user:this.user, room:this.room});
        this.isvalid = true;
        this.user=" ";
        this.room= " ";
    }

    sendMessage()
    {
        this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
        this.messageText= " ";
    }
    
 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
}