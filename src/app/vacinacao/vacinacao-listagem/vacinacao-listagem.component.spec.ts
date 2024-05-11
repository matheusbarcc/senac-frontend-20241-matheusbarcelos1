import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinacaoListagemComponent } from './vacinacao-listagem.component';

describe('VacinacaoListagemComponent', () => {
  let component: VacinacaoListagemComponent;
  let fixture: ComponentFixture<VacinacaoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacinacaoListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacinacaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
