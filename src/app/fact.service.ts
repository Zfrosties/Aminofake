import { Http} from '@angular/http';
import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FactService extends DataService {

  constructor(http: Http) {
      super('http://localhost:59753/api/facts',http)
   }
   getFacts(){
     return [
       {
         title:"bonjour les amis",
         content:"lorem ipsum",
         validated:false,
         fake:false
       },
       {
        title:"bonjour les amis",
        content:"lorem ipsum",
        validated:false,
        fake:false
      },
      {
        title:"bonjour les amis",
        content:"lorem ipsum",
        validated:false,
        fake:false
      },
      {
        title:"Karima aime Zaïd",
        content:"Elle aime sentir les cheveux de Zaïd",
        validated:false,
        fake:false
      }
     ]
   }

}
