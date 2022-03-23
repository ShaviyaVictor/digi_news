import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  techNewsDisplay:any = []

  ngOnInit(): void {

    this._services.techNewsProperties().subscribe((result)=>{
      console.log(result)
      return this.techNewsDisplay = result.articles
    });

  }

}
