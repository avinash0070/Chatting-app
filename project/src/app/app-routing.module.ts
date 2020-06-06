import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { RoomComponent } from './room/room.component';


const routes: Routes = [
  {path:'chat', component: ChatComponent},
  {path: 'room',component : RoomComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
