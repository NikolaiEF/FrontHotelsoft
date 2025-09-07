import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {



currentPage = 1;
rooms =[];
total:any;
loading = false;

constructor(private customerService: CustomerService,
  private message: NzMessageService,
  private modalService: NzModalService

){
  this.getRooms();
}


getRooms() {

  this.customerService.getRooms(this.currentPage - 1).subscribe(res => {
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
}
