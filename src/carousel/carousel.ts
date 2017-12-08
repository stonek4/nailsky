import { bindable } from 'aurelia-framework';

export class Carousel {
    private headerText: string = "Nail Sky";
    @bindable public slides: Array<CarouselItem>;
}

export class CarouselItem {
    public link: string;
    public alt: string;
}
