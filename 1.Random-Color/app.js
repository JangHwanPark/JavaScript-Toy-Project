/** TODO
 *  이전버튼 누르면 다음버튼 역순 (아니면 이전색상)
 *  RGB 버튼 누르면 BackGround Color 텍스트가 현재 배경색 RGB코드로 바뀜
 *  HEX 누르면 현재 BackGround Color 텍스트가 HEX코드로 바뀜
 * */

// Color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const backBtn = document.querySelector('.btn-back');
const nextBtn = document.querySelector('.btn-next');
const colorCode = document.querySelector('.color-name');

// 다음버튼
clickNextButton = () => {
    // default - 눌러봐, 누르면 다음 출력
    nextBtn.textContent = '다음'

    // 돌면서 랜덤값 집어넣음
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        hexColor += hex[hexCodeCalculate()]

    }

    // 위에 값 텍스트랑 바디태그 백그라운드에 출력
    colorCode.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
}

// 헥사코드 계산
hexCodeCalculate = () => {
    return Math.floor(Math.random() * hex.length);
}

// 이전버튼
clickBackButton = () => {

}


// next 버튼 이벤트리스너
nextBtn.addEventListener('click', clickNextButton);

backBtn.addEventListener('click', clickBackButton);