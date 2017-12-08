import * as $ from 'bootstrap-material-design';
import { CarouselItem } from '../carousel/carousel';
import * as AOS from 'aos';

export class App {
    private carouselItems: Array<CarouselItem> = new Array<CarouselItem>();

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
    }
}
