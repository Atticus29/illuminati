import { Pipe, PipeTransform } from '@angular/core';
import { Member} from './member.model'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: Member[], by: string, identity: string) {
    var output: Member [];
    if(by==="role"){
      output = input.filter(member=>{
        return member.role===identity;
      });
      return output;
    } else if (by ==="sector"){
      output = input.filter(member=>{
        return member.sectorOfInfluence===identity;
      });
      return output;
    } else{
      return input;
    }
  }

}
