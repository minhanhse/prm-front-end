import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutes } from './account.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbPopoverModule,
  NbTooltipModule,
  NbToggleModule,
  NbRadioModule,
  NbAccordionModule,
  NbSelectModule,
  NbDatepickerModule,
  NbCalendarModule,
  NbTabsetModule
} from '@nebular/theme';
import {
  NbDateFnsDateModule
} from '@nebular/date-fns';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { vi } from 'date-fns/locale';
import { ShareModule } from 'src/app/share/share.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ThemeModule } from 'src/app/nebular/nebular.module';
import { CarouselModule } from 'primeng/carousel';
// tslint:disable-next-line:prefer-const
let options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  imports: [
    CommonModule,
    AccountRoutes,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbPopoverModule,
    NbToggleModule,
    NbRadioModule,
    NbAccordionModule,
    NbSelectModule,
    NbTooltipModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NbTabsetModule,
    NbDateFnsDateModule.forRoot(
      {
        parseOptions: { locale: vi, awareOfUnicodeTokens: true },
        formatOptions: { locale: vi, awareOfUnicodeTokens: true }
      }),
    NbCalendarModule,
    NbDatepickerModule,
    SweetAlert2Module.forRoot(),
    ShareModule,
    NgxMaskModule.forRoot(),
    CarouselModule,
    NgxMaskModule.forRoot(options),
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
