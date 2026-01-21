import { Component } from '@angular/core';
import { ColorService } from '../generateService/color-service';

@Component({
  selector: 'app-color-palette',
  imports: [],
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.scss',
})
export class ColorPalette {

  /**
   *
   */
  col1: string = "";
  col2: string = "";
  col3: string = "";
  col4: string = "";
  col5: string = "";
  col6: string = "";
  colArgument: string = "#";
  constructor(public colors: ColorService) {
    
  }
  ngOnInit(){

    this.generatePalette();
  }
  generatePalette(){
    this.col1 = this.colors.randomcolors(this.colArgument);
    this.col2 = this.colors.randomcolors(this.colArgument);
    this.col3 = this.colors.randomcolors(this.colArgument);
    this.col4 = this.colors.randomcolors(this.colArgument);
    this.col5 = this.colors.randomcolors(this.colArgument);
    this.col6 = this.colors.randomcolors(this.colArgument);
  }
}
