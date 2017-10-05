import * as $ from 'bootstrap-material-design';
import * as AOS from 'aos';

export class App {
  attached() {
    AOS.init({
        duration: 1200
    });
  }
}
