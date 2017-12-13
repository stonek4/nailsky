import { bindable } from 'aurelia-framework';

export class TabbedPanel {
    @bindable public tabs: Tab[];
}

export class Tab {
    public title: string;
    public content: string;
}
