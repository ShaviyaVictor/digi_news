import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-digicell',
  templateUrl: './digicell.component.html',
  styleUrls: ['./digicell.component.css']
})
export class DigicellComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  digiNewsDisplay:any = []

  ngOnInit(): void {

    this._services.digiNewsProperties().subscribe((results)=>{
      console.log(results)
      this.digiNewsDisplay = results.articles
    })

  }

}
