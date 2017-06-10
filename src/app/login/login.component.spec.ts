import { TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Login Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [LoginComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('LoginComponent Works!');
  });

});
