import * as $ from 'bootstrap-material-design';
import { CarouselItem } from '../carousel/carousel';
import { Tab } from '../tabbed-panel/tabbed-panel';
import { Row } from '../time-table/time-table';
import * as AOS from 'aos';

export class App {
    private carouselItems: CarouselItem[] = new Array<CarouselItem>();
    private tabs: Tab[] = new Array<Tab>();
    private rows: Row[] = new Array<Row>();
    private headers: string[] = new Array<string>();

    attached() {
        $.material.init();
        AOS.init({
            duration: 1200
        });
    }

    created() {
        let picture0: CarouselItem = new CarouselItem();
        picture0.link = "img/jumbo_pic_1.jpg";
        picture0.alt = "a picture of nails";
        let picture1: CarouselItem = new CarouselItem();
        picture1.link = "img/jumbo_pic_2.jpg";
        picture1.alt = "a picture of nails";
        let picture2: CarouselItem = new CarouselItem();
        picture2.link = "img/jumbo_pic_3.jpg";
        picture2.alt = "a picture of nails";
        let picture3: CarouselItem = new CarouselItem();
        picture3.link = "img/jumbo_pic_4.jpg";
        picture3.alt = "a picture of nails";

        this.carouselItems.push(picture0, picture1, picture2, picture3);

        let tab0: Tab = new Tab();
        tab0.title = "Manicure";
        tab0.content = "Manicure content goes here";
        let tab1: Tab = new Tab();
        tab1.title = "Pedicure";
        tab1.content = "Pedicure content goes here";

        this.tabs.push(tab0, tab1);

        this.headers = ["Day", "Hours"];
        let row0: Row = new Row();
        row0.cells = ["Monday", "8am-8pm"];
        let row1: Row = new Row();
        row1.cells = ["Tuesday", "8am-8pm"];
        let row2: Row = new Row();
        row2.cells = ["Wednesday", "8am-8pm"];
        let row3: Row = new Row();
        row3.cells = ["Thursday", "8am-8pm"];
        let row4: Row = new Row();
        row4.cells = ["Friday", "8am-8pm"];
        let row5: Row = new Row();
        row5.cells = ["Saturday", "8am-8pm"];
        let row6: Row = new Row();
        row6.cells = ["Sunday", "8am-8pm"];

        this.rows.push(row0, row1, row2, row3, row4, row5, row6)
    }
}
