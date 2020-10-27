import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private dataSer: DataService) { }

  ngOnInit() {
    console.log(this.dataSer.danhSachPhim)
  }

}
