import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {BotbarCompoent} from '@/shared/botbar/components/botbar/botbar.component'
import {HintModule} from '@/shared/hint/hint.module'

@NgModule({
  imports: [CommonModule, HintModule],
  declarations: [BotbarCompoent],
  exports: [BotbarCompoent]
})
export class BotbarModule {}
