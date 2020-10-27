import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeActiveGuard } from './can-de-active.guard';

describe('CanDeActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeActiveGuard]
    });
  });

  it('should ...', inject([CanDeActiveGuard], (guard: CanDeActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
