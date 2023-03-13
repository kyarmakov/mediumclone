import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeedComponent } from "./feed.component";

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule],
  exports: [FeedComponent],
  providers: [],
})
export class FeedModule {}