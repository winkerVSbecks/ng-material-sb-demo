import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input()
  pageTitle?: string;

  @Input()
  userName?: string;

  @Input()
  searchBar!: boolean;

  @Input()
  menu!: boolean;

  constructor() {}
}
