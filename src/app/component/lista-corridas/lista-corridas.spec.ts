import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorridas } from './lista-corridas';

describe('ListaCorridas', () => {
  let component: ListaCorridas;
  let fixture: ComponentFixture<ListaCorridas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCorridas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCorridas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
