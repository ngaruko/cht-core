import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
p= 'paragraph';
pagination = {pageLinks:['link1', 'link2'],
detail:{displayFirstLastLinks:true}, pages:'pages to ', page:1}
loadPage(pages){
  alert('export' + pages)
}
}
