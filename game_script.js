'use strict'

//要素取得------------------------------------------------------------------------------------

const title = document.getElementsByTagName("h1")[0]; //タイトル
const text1 = document.getElementsByTagName("p")[0]; //"Time Limit :"
const text2 = document.getElementsByTagName("p")[1]; //タイマー
const text3 = document.getElementsByTagName("p")[5]; //Click Me!!
const scoreElement = document.getElementById('scorecounter'); //スコアカウンター
const incrementButton = document.getElementById('flowerbutton'); //フラワーボタン
const img1 = document.getElementsByTagName("img")[0];

//タイマー------------------------------------------------------------------------------------

window.onload = function() {
  document.querySelector('#startbutton').addEventListener('click', function(e) {
    e.preventDefault();
    let count = 10;
    let id = setInterval(function() {
      count--;
      document.querySelector('#timer').textContent = count;
      if (count <= 0) {
        clearInterval(id);
        title.textContent = "Finish!!!!!!"
        text1.textContent = "";
        text2.textContent = "";
        // img1.height = 0;
        // img1.width = 0;
        img1.src = "flowerNormal.png"
        if (score >= 150) {
          text3.textContent = "Great!!!"
        } else if (score >= 100) {
          text3.textContent = "Good!!!"
        } else if (score >= 50) {
          text3.textContent = "Soso..."
        } else {
          text3.textContent = "Too Bad..."
        }
      }
    }, 1000);
  });
}

//カウンター-----------------------------------------------------------------------------------

// スコアの初期値
let score = 0;

// クリックしたらスコアを増やす関数
function incrementScore() {
  score++;
  scoreElement.textContent = score;
// 初期表示時に画像を更新する
  changeImage(score);
}

// ボタンにクリックイベントを追加

flowerbutton.addEventListener('click', incrementScore);

// スコアに応じて画像を変更する関数---------------------------------------------------------------
function changeImage(score) {
    let imageElement = document.querySelector('#flowerbutton img');
    if (score >= 150) {
        imageElement.src = "https://github.com/Tomato1228/TomaNozaki.fnd26/blob/main/flower1.png?raw=true"; // スコアが150以上の場合の画像
    } else if (score >= 100) {
        imageElement.src = "https://github.com/Tomato1228/TomaNozaki.fnd26/blob/main/flower2.png?raw=true"; // スコアが100以上の場合の画像
    } else if (score >= 50) {
        imageElement.src = "https://github.com/Tomato1228/TomaNozaki.fnd26/blob/main/flower3.png?raw=true"; // スコアが50以上の場合の画像
    } else {
        imageElement.src = "https://github.com/Tomato1228/TomaNozaki.fnd26/blob/main/flowerNormal.png?raw=true" //スコアが50点未満の画像
    }
}

//---------------------------------------------------------------------------------------------
let longPressTimer;

document.getElementById('returnbutton').addEventListener('mousedown', function() {

  // マウスダウン時にタイマーをセット
  longPressTimer = setTimeout(function() {
    // 2秒後に実行する処理
}, 2000); 
});
document.getElementById('returnbutton').addEventListener('mouseup', function() {
  // マウスアップ時にタイマーをクリア
  clearTimeout(longPressTimer);
});

//音楽流す--------------------------------------------------------------------------
