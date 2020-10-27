import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  phimModal;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.phimModal.subscribe((data)=> {
      this.phimModal = data;
    })
  }

}
