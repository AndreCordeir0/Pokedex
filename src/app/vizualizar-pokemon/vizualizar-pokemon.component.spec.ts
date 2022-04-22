import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarPokemonComponent } from './vizualizar-pokemon.component';

describe('VizualizarPokemonComponent', () => {
  let component: VizualizarPokemonComponent;
  let fixture: ComponentFixture<VizualizarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
