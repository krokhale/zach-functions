const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const delay = ms => new Promise(res => setTimeout(res, ms));

exports.helloWorld = async (req, res) => {
    await delay(2000);
    res.send("Hello from Firebase after await!!");
};

exports.helloWorldNull = async (req, res) => {
    await delay(2000);
    return null;
};

// exports.helloWorld = functions.https.onRequest(async (request, response) => {
//     cors(request, response, () => {
//         response.send("Hello from Firebase!");
//     })
// });
