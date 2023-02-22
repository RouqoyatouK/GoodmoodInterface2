import { TestBed } from '@angular/core/testing';

import { TypemessageService } from './typemessage.service';

describe('TypemessageService', () => {
  let service: TypemessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypemessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
