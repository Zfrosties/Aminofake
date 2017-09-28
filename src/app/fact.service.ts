import { Injectable } from '@angular/core';

@Injectable()
export class FactService {

  constructor() { }

  getFacts(){
    return [
      {
        title:'zaid est un pd',
        content:'lorem zrehberternedrnernernrenernernernrenernernerernernernobgehqboihboishbioshbshbsfoibhrosibhsdbioboiboibiohLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis a natus nam quisquam obcaecati expedita esse dolores temporibus est ad incidunt eius dolor quidem consequuntur sequi accusamus, dolorum provident?abi',
        validated:true,
        fake:true
      },
      {
        title:'jawad est un pd',
        content:'lorem zabi',
        validated:false,
        fake:undefined
      },
      {
        title:'ibrahim est un pd',
        content:'lorem zabi',
        validated:false,
        fake:undefined
      }
    ]
  }
}
