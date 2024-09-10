import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "price",
})
export class PricePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value + " грн";
  }
}
