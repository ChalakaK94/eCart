import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input()
  all = 0
  @Input()
  inStock = 0;
  @Input()
  outOfStock = 0

  changeRadio($event: Event) {

  }
}
