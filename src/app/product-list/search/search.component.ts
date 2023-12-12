import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTxt = ''
  @Output()
  searchTerm = new EventEmitter<string>()

  onSearch(inputValue: HTMLInputElement) {
    console.log(inputValue.value)
    this.searchTerm.emit(inputValue.value)
    this.searchTxt = inputValue.value
  }
}
