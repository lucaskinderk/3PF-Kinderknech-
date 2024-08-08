import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesPipesComponent } from './style-pipes.component';

describe('StylesPipesComponent', () => {
  let component: StylesPipesComponent;
  let fixture: ComponentFixture<StylesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylesPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
