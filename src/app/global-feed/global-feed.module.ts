import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerModule } from "../shared/components/banner/banner.module";
import { FeedModule } from "../shared/components/feed/feed.module";
import { GlobalFeedComponent } from "./global-feed.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  }
]

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    FeedModule,
    BannerModule,
  ],
  exports: [],
  providers: [],
})
export class GlobalFeedModule {}