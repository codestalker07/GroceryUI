import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegitables',
  templateUrl: './vegitables.component.html',
  styleUrls: ['./vegitables.component.css']
})
export class VegitablesComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
