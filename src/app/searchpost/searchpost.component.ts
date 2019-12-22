import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpost',
  templateUrl: './searchpost.component.html',
  styleUrls: ['./searchpost.component.less']
})
export class SearchpostComponent implements OnInit {
  searchQuery: any;

  constructor() { }

  ngOnInit() {
  }

}
