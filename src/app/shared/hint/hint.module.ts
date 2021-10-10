import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HintComponent} from '@/shared/hint/components/hint/hint.component'

@NgModule({
  imports: [CommonModule],
  declarations: [HintComponent],
  exports: [HintComponent]
})
export class HintModule {}
