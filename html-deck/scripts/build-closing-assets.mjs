import {readFileSync,writeFileSync} from 'node:fs';
const video='data:video/mp4;base64,'+readFileSync('public/google-pay-success.mp4').toString('base64');
const poster='data:image/png;base64,'+readFileSync('public/google-pay-success-poster.png').toString('base64');
writeFileSync('src/payment-success.js',`export const paymentSuccessVideo=${JSON.stringify(video)};\nexport const paymentSuccessPoster=${JSON.stringify(poster)};\n`);
