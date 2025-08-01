import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "customPipe",
})
export class CustomPipePipe implements PipeTransform {
  transform(value: string, format: string): string {
    if (format === "uppercase") {
      return value.toUpperCase();
    } else {
      return value;
    }
  }
}
