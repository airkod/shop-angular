import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Filter } from "@interfaces/filter";

@Component({
  selector: "app-filter",
  templateUrl: "filter.component.html",
  styleUrls: [ "filter.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Output() change: EventEmitter<void> = new EventEmitter<void>();

  @Input() filters: Filter[];
  @Input() selectedFilters: any = {};

  isFilterValueSelected(filter: Filter, value: string): boolean {
    return !!this.selectedFilters[filter.id]?.find((v: string) => v === value);
  }

  setFilter(filter: Filter, value: string): void {
    if (this.isFilterValueSelected(filter, value)) {
      this.selectedFilters[filter.id] = this.selectedFilters[filter.id].filter((v: string) => v !== value);

      if (!this.selectedFilters[filter.id].length) {
        delete this.selectedFilters[filter.id];
      }

    } else {
      this.selectedFilters[filter.id] = this.selectedFilters[filter.id] || [];
      this.selectedFilters[filter.id].push(value);
    }
    this.change.emit(this.selectedFilters);
  }
}
