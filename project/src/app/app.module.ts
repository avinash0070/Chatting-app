import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule, FormsModule,RouterModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
