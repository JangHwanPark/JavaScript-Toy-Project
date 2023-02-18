/**
 * TODO : 코드 리팩토링
 * TODO : 코드의 재사용성을 높이려면 무엇을 개선해야할지 고민해보기.
 * TODO : 주석 정리
 */


/** HTML 문서에서 모든 select 요소를 찾고 selectBox 변수에 저장한다. */
const selectBox = document.querySelectorAll('.form-select');


/** Product Data */
const productSelect = ['선택하세요', '모자', '셔츠', '바지'];


/** "ProductSelect"를 순회하며 "option"태그와 "Text"를 부착한다. (productData + 1)*/
productSelect.forEach((productData) => selectBox[0].insertAdjacentHTML('beforeend',`<option>${productData}</option>>`));



/** Size Data */
const shirtSize = [85, 90, 95, 100, 105, 110];
const pantsSize = [28, 30, 32, 36, 38, 40];


/** SizeSelect EventListener ("selectBox"에 입력이 발생하면 이벤트 발생) */
selectBox[0].addEventListener('input', () => {
    /** selectBox 0번 인덱스에 입력이벤트(input)가 발생하면 그 값(value)을 selectValue 변수에 저장한다. */
    let selectValue = selectBox[0].value;
    /** 새로운 select 박스는 인라인요소로 두고 JS를 이용하여 transition "CSS"속성을 부여한다. */
    selectBox[1].style.transition = 'all 1s';
    /**
     * 만약 입력값이 셔츠라면 "select" 1번 인덱스의 form-on 클래스를 지운다.
     *
     * "innerHTML"을 사용하여 "select"1번 인덱스의 텍스트를 빈칸으로 만든다.
     *
     * 배열의 요소를 반복하여 select 1번 인덱스 맨 뒷부분에 "option"태그와 pantsData(배열의 요소)를 반환한다
     */
    if (selectValue === '셔츠') {
        selectBox[1].classList.remove('form-on');
        selectBox[1].innerHTML = '';
        shirtSize.forEach((shirtData) => selectBox[1].insertAdjacentHTML('beforeend',`<option>${shirtData}</option>`));
    }
    /** else if도 if 문법과 과정은 같다. (배열명만 다름) */
    else if (selectValue === '바지') {
        selectBox[1].classList.remove('form-on');
        selectBox[1].innerHTML = '';
        pantsSize.forEach((pantsData) => selectBox[1].insertAdjacentHTML('beforeend', `<option>${pantsData}</option>`));
    }
    /** selectBox 1번 인덱스(select)에 form-on 클래스를 추가한다. */
    else {
        selectBox[1].classList.add('form-on');
    }
});