import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {



currentPage = 1;
rooms =[];
total:any;
loading = false;

constructor(private adminService: AdminService,
  private message: NzMessageService,
  private modalService: NzModalService

){
  this.getRooms();
}


getRooms() {

  this.adminService.getRooms(this.currentPage - 1).subscribe(res => {
    console.log('👉 Respuesta del backend:', res);

    this.rooms = res.roomsDtoList;   
    this.total = res.totalPages;

    console.log('👉 Rooms asignadas:', this.rooms); 
    
  });
}

pageIndexChange(value:any){
  this.currentPage = value;
  this.getRooms();

}

showConfirm(roomId:number){
this.modalService.confirm({
  nzTitle: '¿Estás seguro de que deseas eliminar esta habitación?',
  nzContent: '<b style="color: red;">Esta acción no se puede deshacer</b>',
  nzOkText: 'Sí',
  nzCancelText: 'No',
  nzOnOk: () => this.deleteRoom(roomId)

})

}

deleteRoom(roomId:number){
  this.adminService.deleteRoom(roomId).subscribe(res=> {
    this.message
    .success(`Habitación eliminada con éxito`, { nzDuration: 5000 });
    this.getRooms();
}, error=> {
  this.message.error(`${error.error}`, { nzDuration: 5000 });
})
}

}
