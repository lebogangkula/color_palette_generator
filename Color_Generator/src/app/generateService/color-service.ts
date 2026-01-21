import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  
  
  hexDec: string = "0123456789abcdef"

  randomcolors(charac:string): string{
  for (let index = 0; index < 6; index++) {
         charac += this.hexDec[Math.floor(Math.random() * 16)]; }
         
         return charac;
  }


}
