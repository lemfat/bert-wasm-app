import * as maskedlm from "../maskedlm/pkg"; // Wasmをモジュールとして読み込み

performance.mark('myPerfStart');

console.log("================================")
const output = maskedlm.predict_masked_words("日本の首都は[MASK]です");  // BERTでの推論実行
console.log(output)

/** 計測終了 */
performance.mark('myPerfEnd');

/** 実際に計測 */
performance.measure(
  'myPerf',
  'myPerfStart',
  'myPerfEnd'
);

const results = performance.getEntriesByName('myPerf');
const time = results[0].duration;
console.log('実行時間 = ' + time + 'ミリ秒');
