import { bindable } from 'aurelia-framework';
import { Row } from '../time-table/time-table';

export class TabbedPanel {
    @bindable public tabs: Tab[];
}

export class Tab {
    public title: string;
    public content: string;
    public headers: string[];
    public rows: Row[];
}
