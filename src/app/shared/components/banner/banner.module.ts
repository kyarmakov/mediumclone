import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner.component";

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent],
})
export class BannerModule {}