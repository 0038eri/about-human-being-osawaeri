// フォント
var fontSize = 70;
var fontFamily;

// 準備
var randomAry = (8); // シャッフル専用配列
var setAry = (4); // 収納専用配列
var ObjectsNumber = 7; // オブジェクト数
var currentNumber; // 表示させる画像の番号
var positionNumber; // 座標の番号
var currentText; // 現在の文字

// 文字位置番号
var type01;
var type02;
var type03;
var type04;

// 文字配列
var stringAry = ['止', '家', '寝', '食', '電', '情', '洒', '落', '舞', '遊', '我', '儘', '英', '得', '自', '主'];

var angle = 0;
var lx = -fontSize / 2;
var rx = fontSize / 2;
var r = 10;

function preload() {
    fontFamily = loadFont('./assets/fonts/esenapaj.otf');
}

function setup() {
    preload();
    var canvas = createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textFont(fontFamily);
    shuffle_contents();
}

function draw() {
    background(0);
    fill(255);
    textSize(100);
    text('大澤　英理', width / 2, height / 2);
    textSize(fontSize);
    // 01
    push();
    translate(width / 5, height / 3.5);
    type01 = setNumber(0);
    setColor(type01);
    text(stringAry[type01], lx - sin(radians(angle)) * r, -cos(radians(angle)) * r);
    setColor(type01 + 1);
    text(stringAry[type01 + 1], rx + sin(radians(angle)) * r, cos(radians(angle)) * r);
    pop();
    // 02
    push();
    translate(width / 5, height - height / 3.5);
    type02 = setNumber(1);
    setColor(type02 + 1);
    text(stringAry[type02 + 1], rx - sin(radians(angle)) * r, -cos(radians(angle)) * r);
    setColor(type02);
    text(stringAry[type02], lx + sin(radians(angle)) * r, cos(radians(angle)) * r);
    pop();
    // 03
    push();
    translate(width - width / 5, height / 3.5);
    type03 = setNumber(2);
    setColor(type03 + 1);
    text(stringAry[type03 + 1], rx - sin(radians(angle)) * r, -cos(radians(angle)) * r);
    setColor(type03);
    text(stringAry[type03], lx + sin(radians(angle)) * r, cos(radians(angle)) * r);
    pop();
    // 04
    push();
    translate(width - width / 5, height - height / 3.5);
    type04 = setNumber(3);
    setColor(type04);
    text(stringAry[type04], lx - sin(radians(angle)) * r, -cos(radians(angle)) * r);
    setColor(type04 + 1);
    text(stringAry[type04 + 1], rx + sin(radians(angle)) * r, cos(radians(angle)) * r);
    pop();

    angle += 1.5;
}

// オブジェクトナンバーをシャッフルする
function shuffle_contents() {
    randomAry = [0, 2, 4, 6, 8, 10, 12, 14];
    for (var i = 0; i < 10000; i++) {
        var j = Math.floor(Math.random() * ObjectsNumber);
        var t = randomAry[ObjectsNumber];
        randomAry[ObjectsNumber] = randomAry[j];
        randomAry[j] = t;
    }
    setAry = randomAry;
}

// それぞれのポイントにオブジェクトナンバーをセットする
function setNumber(positionNumber) {
    currentNumber = setAry[positionNumber];
    return currentNumber;
}

function setColor(currentText) {
    switch (currentText) {
        // レッド
        case 0:
        case 15:
            fill(255, 0, 0);
            break;
            // オレンジ
        case 1:
        case 10:
            fill(255, 127, 0);
            break;
            // イエロー
        case 4:
        case 14:
            fill(255, 255, 0);
            break;
            // グリーン
        case 3:
        case 9:
            fill(0, 255, 0);
            break;
            // ライトブルー
        case 5:
        case 13:
            fill(0, 255, 255);
            break;
            // ブルー
        case 6:
        case 12:
            fill(0, 0, 255);
            break;
            // パープル
        case 2:
        case 7:
            fill(124, 0, 255);
            break;
            // ピンク
        case 8:
        case 11:
            fill(255, 0, 255);
            break;
            // ブラック
        default:
            fill(0);
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}