import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { CommonModule } from "@angular/common";
// component
import { CamelizePipe } from "ngx-pipes";
import { MapComponent } from "./map.component";
import { MapService } from "./map.service";

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
    CommonModule
  ],

  providers: [MapService, CamelizePipe]
})
export class MapModule {}
