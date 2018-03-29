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
        picture0.link = "img/jumbo_pic_1.png";
        picture0.alt = "a picture inside of the nail salon";
        let picture1: CarouselItem = new CarouselItem();
        picture1.link = "img/jumbo_pic_2.png";
        picture1.alt = "a picture of the inside of the nail salon";
        let picture2: CarouselItem = new CarouselItem();
        picture2.link = "img/jumbo_pic_3.png";
        picture2.alt = "a picture of the nail salon chairs";
        let picture3: CarouselItem = new CarouselItem();


        this.carouselItems.push(picture0, picture1, picture2);

        let tab0: Tab = new Tab();
        tab0.title = "Manicure";
        tab0.content = "Our manicures will keep your nails shaped, your cuticles conditioned, and your hands and arms feeling relaxed after we massage them.  Come treat yourself, or schedule a party for your event with us!";
        let priceHeader: string[] = ["Service", "Price"]
        tab0.headers = priceHeader;
        tab0.rows.push(new Row(["Manicure", "$20.00"]));
        tab0.rows.push(new Row(["Male Manicure", "$20.00"]));
        tab0.rows.push(new Row(["Paraffin Manicure", "$25.00"]));
        tab0.rows.push(new Row(["Shellac Manicure", "$40.00"]));
        tab0.rows.push(new Row(["Make it a French", "+$5.00"]));

        let tab1: Tab = new Tab();
        tab1.title = "Pedicure";
        tab1.content = "Each pedicure is a relaxing spa experience.  We offer a variety of different spa experiences including chocolate and green tea.  Each spa will leave your feet feeling brand new, and ready to do all of that downtown walking!";
        tab1.headers = priceHeader;
        tab1.rows.push(new Row(["Pedicure", "$37.00"]));
        tab1.rows.push(new Row(["Chocolate Spa Pedicure", "$55.00"]));
        tab1.rows.push(new Row(["Green Tea Spa Pedicure", "$65.00"]));
        tab1.rows.push(new Row(["Shellac Pedicure", "$55.00"]));
        tab1.rows.push(new Row(["Make it a French", "+$5.00"]));

        let tab2: Tab = new Tab();
        tab2.title = "Full Set";
        tab2.content = "Our Tip Sets look natural and won't damage your nails, perfect for impressing your friends (or anyone else)!";
        tab2.headers = priceHeader;
        tab2.rows.push(new Row(["Silk Set", "$70.00"]));
        tab2.rows.push(new Row(["Tip Set", "$60.00"]));
        tab2.rows.push(new Row(["Removal", "$5.00-$20.00"]));

        let tab3: Tab = new Tab();
        tab3.title = "Waxing";
        tab3.content = "Our waxing is accurate and even, making sure that you will feel confident and comfortable when you walk out the doors.";
        tab3.headers = priceHeader;
        tab3.rows.push(new Row(["Lip", "$10.00"]));
        tab3.rows.push(new Row(["Eyebrow", "$12.00"]));
        tab3.rows.push(new Row(["Chin", "$15.00"]));
        tab3.rows.push(new Row(["Full Face", "$40.00"]));
        tab3.rows.push(new Row(["Arm", "$20.00 & Up"]));
        tab3.rows.push(new Row(["Under Arm", "$20.00"]));
        tab3.rows.push(new Row(["Upper Leg", "$30.00 & Up"]));
        tab3.rows.push(new Row(["Lower Leg", "$30.00 & Up"]));
        tab3.rows.push(new Row(["Bikini", "$30.00 & Up"]));
        tab3.rows.push(new Row(["Full Bikini", "$50.00"]));
        tab3.rows.push(new Row(["Male Back", "$60.00 & Up"]));

        let tab4: Tab = new Tab();
        tab4.title = "Massage";
        tab4.content = "Come get away from the downtown crowds with a quick massage that will make you forget your are in Denver for a while.";
        tab4.headers = priceHeader;
        tab4.rows.push(new Row(["Shoulder/Feet 10min.", "$10.00"]));
        tab4.rows.push(new Row(["Back 10min.", "$15.00"]));
        tab4.rows.push(new Row(["Back 15min.", "$20.00"]));

        let tab5: Tab = new Tab();
        tab5.title = "Other";
        tab5.content = "We offer a few other services that are listed here!";
        tab5.headers = priceHeader;
        tab5.rows.push(new Row(["Polish Change", "$10.00-$15.00"]));
        tab5.rows.push(new Row(["Shellac Polish Change", "$25.00"]));
        tab5.rows.push(new Row(["Paraffin Hands Treatment", "$10.00"]));
        tab5.rows.push(new Row(["Paraffin Feet Treatment", "$15.00"]));

        this.tabs.push(tab0, tab1, tab2, tab3, tab4, tab5);

        this.headers = ["Day", "Hours"];
        let row0: Row = new Row();
        row0.cells = ["Monday", "10:00am-7:00pm"];
        let row1: Row = new Row();
        row1.cells = ["Tuesday", "10:00am-7:00pm"];
        let row2: Row = new Row();
        row2.cells = ["Wednesday", "10:00am-7:00pm"];
        let row3: Row = new Row();
        row3.cells = ["Thursday", "10:00am-7:00pm"];
        let row4: Row = new Row();
        row4.cells = ["Friday", "10:00am-7:00pm"];
        let row5: Row = new Row();
        row5.cells = ["Saturday", "10:00am-6:00pm"];
        let row6: Row = new Row();
        row6.cells = ["Sunday", "10:30am-5:30pm"];

        this.rows.push(row0, row1, row2, row3, row4, row5, row6)
    }
}
