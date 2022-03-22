import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'statusPipe'})

export class statusPipe implements PipeTransform {
  transform(value: string): boolean | null {
    if (value == "active") {
      return true;
    } else if (value == "inactive") {
      return false;
    } else {
      return null;
    }
  }
}
