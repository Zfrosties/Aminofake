import { Http} from '@angular/http';
import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FactService extends DataService {

  constructor(http: Http) {
      super('http://localhost:59753/api/values',http)
   }

}
