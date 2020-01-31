export class AppStyles {

  private e = getComputedStyle(document.body);

  constructor() { }

  Style = {
    colors: {
      gray: {
        100: "#f6f9fc",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#8898aa",
        700: "#525f7f",
        800: "#32325d",
        900: "#212529"
      },
      theme: {
        primary: this.e.getPropertyValue("--primary") ? this.e.getPropertyValue("--primary").replace(" ", "") : "#2A85D1",
        info: this.e.getPropertyValue("--info") ? this.e.getPropertyValue("--info").replace(" ", "") : "#00B8D9",
        success: this.e.getPropertyValue("--success") ? this.e.getPropertyValue("--success").replace(" ", "") : "#36B37E",
        danger: this.e.getPropertyValue("--danger") ? this.e.getPropertyValue("--danger").replace(" ", "") : "#FF5630",
        warning: this.e.getPropertyValue("--warning") ? this.e.getPropertyValue("--warning").replace(" ", "") : "#FFAB00",
        dark: this.e.getPropertyValue("--dark") ? this.e.getPropertyValue("--dark").replace(" ", "") : "#212529"
      },
      transparent: "transparent"
    },
    fonts: {
      base: "Nunito"
    }
  }
}
