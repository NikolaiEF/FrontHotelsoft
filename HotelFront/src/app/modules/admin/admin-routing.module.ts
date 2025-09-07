import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { UpdateRoomnComponent } from './components/update-roomn/update-roomn.component';


const routes: Routes = [
  
  { path: '', component: AdminComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'room', component: PostRoomComponent },
{ path: 'room/:id/edit', component: UpdateRoomnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
