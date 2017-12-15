import { bindable } from 'aurelia-framework';

export class TimeTable {
    @bindable headers: string[];
    @bindable rows: Row[];
}

export class Row {

    cells: string[];

    constructor(cells?: string[]) {
      this.cells = cells;
    }
}
