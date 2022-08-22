import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabform',
  templateUrl: './tabform.component.html',
  styleUrls: ['./tabform.component.css']
})
export class TabformComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    
  }
  ngOnInit(): void {
   
  }
}


