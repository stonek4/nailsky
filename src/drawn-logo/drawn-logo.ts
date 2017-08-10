export class DrawnLogo {
    attached() {
      // Get the id of the <path> element and the length of <path>
      const logo = <any>document.getElementById("drawn-logo-logo");
      const length = logo.getTotalLength();

      // The start position of the drawing
      logo.style.strokeDasharray = length;

      // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
      logo.style.strokeDashoffset = length;

      // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
      window.addEventListener("scroll", size);

      function size() {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        const draw = length * scrollpercent;

        // Reverse the drawing (when scrolling upwards)
        logo.style.strokeDashoffset = length - draw;
      }
    }
}
