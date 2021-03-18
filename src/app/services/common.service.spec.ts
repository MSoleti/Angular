import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

const httpClientMock =  jasmine.createSpyObj('HttpClient', ['get']);

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers:
        [
          CommonService,
          {
            provide: HttpClient,
            useValue: httpClientMock
          }
        ]
      });
    service = TestBed.inject(CommonService);
    service.url="www.google.com";
  });

  it('Service create', () => {
    expect(service).toBeTruthy();
  });

  it('Get All Service ', () => {
    httpClientMock.get.and.returnValue({name:1});
    expect(service.getAll(service.url)).toBeTruthy();
  });

});
