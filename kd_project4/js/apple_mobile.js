/* Footer Menu Script */
// click 이벤트 실행 선택자 할당 = 소스캡쳐, 넘버링
const plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
console.log('plusBtn : ', plusBtn);
// plusBtn item들 추출후 각각 할당 
// = for문 이용, 표준이벤트, 클릭시 toggleFooterMenu라는 리스너 호출이 되는 형식 코딩
for(let i=0; i<plusBtn.length; i++){
    plusBtn[i].addEventListener('click',toggleFooterMenu);
}
// CSS 연동 클래스 할당
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';

// 이벤트 리스너
function toggleFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}