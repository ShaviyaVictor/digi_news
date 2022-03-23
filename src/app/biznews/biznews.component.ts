import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-biznews',
  templateUrl: './biznews.component.html',
  styleUrls: ['./biznews.component.css']
})
export class BiznewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  bizNewsDisplay:any = []

  ngOnInit(): void {

    this._services.bizNewsProperties().subscribe((results)=>{
      console.log(results)
      this.bizNewsDisplay = results.articles
    })

  }

}
