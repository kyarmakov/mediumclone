import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { TopBarComponent } from "./top-bar.component";

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule, StoreModule],
  exports: [TopBarComponent],
  providers: [],
})
export class TopBarModule {}