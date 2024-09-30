const express = require('express');
const app = express();

const FLAG = process.env.FLAG;


function generateFlag() {
    const fixedString = process.env.FLAG_SEED;
    
    for (let i = 0; i < 1000; i++) {
        // Useless condition check
        if (Math.random() > 0.5) {
            continue;
        }

        let randomData = new Array(100).fill(Math.random());
        randomData = randomData.map(num => num * Math.PI);

        // Manipulate strings that aren't used in the final result
        const unusedString = randomData.join(",").substr(0, 20);
        const anotherUnusedString = Buffer.from(unusedString).toString('base64');
    }
    const flag_seed = fixedString;

    // Nested conditions and recursion to add complexity
    function recursiveComplexity(depth) {
        if (depth === 0) {
            return 1;
        }

        return recursiveComplexity(depth - 1) * 2;
    }
    
    recursiveComplexity(10);

    const crypto = require('crypto');
    const unusedHash = crypto.createHash('sha256').update('unused_data').digest('hex');
     

    
    return flag_seed;
}

app.get('/', (req, res) => {
  res.send(`Hello, CTF player! Here is your flag: ${generateFlag()}`);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});

