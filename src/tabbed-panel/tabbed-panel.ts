import { bindable } from 'aurelia-framework';
import { Row } from '../time-table/time-table';

export class TabbedPanel {
    @bindable public tabs: Tab[];
    public headers: string[] = new Array<string>();
    public rows: Row[];

    public changeTable(tab: Tab) {
        this.headers = tab.headers;
        this.rows = tab.rows;
    }

    public attached() {
        this.headers = this.tabs[0].headers;
        this.rows = this.tabs[0].rows;
    }
}

export class Tab {
    public title: string;
    public content: string;
    public headers: string[];
    public rows: Row[] = new Array<Row>();
}
