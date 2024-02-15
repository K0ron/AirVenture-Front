import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input('total') all: number = 0;
  @Input() france: number = 0;
  @Input() outFrance: number = 0;

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
