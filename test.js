import { levensthein } from "./Levensthein.js"
import test from 'ava'

//ava c'est une framework de test
test('distance de leveinstein', t => {
   [
      ['niche', 'chien', 4],
      ['maison', 'maçon', 2]
   ]. forEach(([a, b, expeted]) => {
      t.is(levensthein(a, b), expeted)
   });
  
})
/*const levenshtein = require('js-levenshtein');
 
levenshtein('kitten', 'sitting');
//=> 3*/