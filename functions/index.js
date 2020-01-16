const functions = require('firebase-functions');
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.use(cookieParser);

// call handling
const callsModule = require('./calls');
exports.helloWorld = functions.https.onRequest(callsModule.helloWorld);
exports.helloWorldNull = functions.https.onRequest(callsModule.helloWorldNull);
// exports.placeCall = functions.https.onRequest(callsModule.placeCall);
// exports.handleInboundCall = functions.https.onRequest(callsModule.handleInboundCall);
// exports.handleAnnounceCompleted = functions.https.onRequest(callsModule.handleAnnounceCompleted);
// exports.handleAnnounceScreen = functions.https.onRequest(callsModule.handleAnnounceScreen);
// exports.handleAnnounceFinish = functions.https.onRequest(callsModule.handleAnnounceFinish);
// exports.handleTranscription = functions.https.onRequest(callsModule.handleTranscription);
// exports.callEnded = functions.https.onRequest(callsModule.callEnded);
// exports.incoming = functions.https.onRequest(callsModule.incoming);
// exports.handleCallCompleted = functions.https.onRequest(callsModule.handleCallCompleted);



exports.app = functions.https.onRequest(app);
