import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateUpdateCategoryComponent } from './admin-create-update-category.component';

describe('AdminCreateUpdateCategoryComponent', () => {
  let component: AdminCreateUpdateCategoryComponent;
  let fixture: ComponentFixture<AdminCreateUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateUpdateCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
