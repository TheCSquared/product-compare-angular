import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  @Input() products: any;

  constructor() { }

  ngOnInit() {
  }

}
