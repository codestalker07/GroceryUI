import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgModule} from '@angular/core'
import {fruites} from '../../../searchfiles/fruites.model';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
   fruites:fruites[]=[];
   searchText:string;
  constructor() { }

  ngOnInit(): void {
   /* this.fruites=[
      {
        "name":"apple",
      }
    ];*/
    
  }

  Search()
  {
    if(this.searchText!="")
    {
          
    this.fruites=this.fruites.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
    });
    }
    else if(this.searchText == "")
    {
      this.ngOnInit();
    }
  }

}
