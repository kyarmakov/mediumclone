import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { FeedComponent } from "./feed.component";
import { FeedService } from "./services/feed.service";
import { FeedEffects } from "./store/feed.effects";
import { feedReducer } from "./store/feed.reducer";

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, 
    EffectsModule.forFeature([FeedEffects]), 
    StoreModule.forFeature('feed', feedReducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}