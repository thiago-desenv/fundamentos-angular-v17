import { AfterContentInit, AfterViewInit, Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterContentInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.content);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.content);
  }
  ngOnInit(): void {
    console.log('OnInit', this.content);
  }
  @ContentChild('meuTemplate') content!: TemplateRef<any>;

  // condition: boolean = false;

  // @Input({ required: true }) header!: TemplateRef<any>;
  // @Input({ required: true }) content!: TemplateRef<any>;
  // @Input() footer!: TemplateRef<any>;
}
