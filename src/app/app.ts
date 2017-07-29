import * as $ from 'bootstrap-material-design';

export class App {
  attached() {
    setTimeout(() => {
        $.material.init();
    });
  }
}
