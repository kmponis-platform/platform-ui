import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilePathComponent } from './user-file-path.component';

describe('UserFilePathComponent', () => {
  let component: UserFilePathComponent;
  let fixture: ComponentFixture<UserFilePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
