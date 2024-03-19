import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatRadioModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input('total') all: number = 0;
  @Input() Europe: number = 0;
  @Input() Ameriquedusud: number = 0;
  @Input() Ameriquedunord: number = 0;
  @Input() Afrique: number = 0;
  @Input() Asie: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  filteredRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filteredRadioButtonSelectionChanged.emit(
      this.selectedRadioButtonValue
    );
    // console.log(this.selectedRadioButtonValue);
  }
}
