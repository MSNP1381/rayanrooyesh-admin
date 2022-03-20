import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionId2Str'
})
export class TransactionId2StrPipe implements PipeTransform {
  transform(n: number): string {
    const obj={
      1  : 'OTHELLO',
      2  : 'PENTAGO',
      3        : 'BEZANGAH',
      4      : 'DREKTESHAF',
      5     : 'HEX',
      6    : 'DOOZ',
      7   : 'KARDASTI',
      8   : 'krdastinejat',
      9  : 'SIMPLEQ',
      10:'HARDQ' ,
      11: 'MEDIUMQ',
      12        : 'GOLDENQ',
      13      : 'TANGO',
      14    : 'ORIGAMI',
      15  : 'GAME',
      16: 'BALANCE',
      17       : 'ADD',
      18     : 'REMOVE',
    }
    return obj[n];
   
  }
}