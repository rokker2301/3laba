import { Transform } from 'stream';

import { formatPhoneNumber } from './first.js';
import { arrayDiff } from './secound.js';

class TransformChoise extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'first':
        result = formatPhoneNumber(chunk.toString('utf8'));
        break;
      case 'secound':
        result = arrayDiff(chunk.toString('utf8'));
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }

    this.push(result);
    done();
  }
}

export default TransformChoise;