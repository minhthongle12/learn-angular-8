import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  movie;
  maPhim;
  tenPhim;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    // this.maPhim = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.tenPhim = params.tenPhim;
      this.maPhim = params.idPhim;
    })

    this.dataService.getMovieDetail(this.maPhim).subscribe((data:any)=> {
      this.movie=data;
    })
  }

}
