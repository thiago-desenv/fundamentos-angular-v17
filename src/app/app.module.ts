import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirectiveDirective } from './directives/input-background.directive.directive';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';
import { XssComponent } from './xss/xss.component';
import { CardTextTitleDirective } from './components/card/directives/card-text-title.directive';
import { CardTextSubtitleDirective } from './components/card/directives/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './components/card/directives/card-text-description.directive';
import { CardAvatarSmallDirective } from './components/card/directives/card-avatar-small.directive';
import { CardAvatarLargeDirective } from './components/card/directives/card-avatar-large.directive';
import { MeuCompComponent } from './meu-comp/meu-comp.component';
import { CardComponent } from './card/card.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { JsonComponent } from './json/json.component';
import { SliceComponent } from './slice/slice.component';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

const datePipeconfig: DatePipeConfig = { dateFormat: 'dd/MM/YYYY', timezone: '+0000' };

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirectiveDirective,
    FocusSecondInputDirective,
    XssComponent,
    CardTextTitleDirective,
    CardTextSubtitleDirective,
    CardTextDescriptionDirective,
    CardAvatarSmallDirective,
    CardAvatarLargeDirective,
    MeuCompComponent,
    CardComponent,
    UserStatusPipe,
    TruncatePipe,
    UppercaseComponent,
    LowercaseComponent,
    TitlecaseComponent,
    JsonComponent,
    SliceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: datePipeconfig } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
