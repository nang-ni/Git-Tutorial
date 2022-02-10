var slides = document.querySelector('.slides'), //ul 지정
    slide = document.querySelectorAll('.slides li'), //li 전체 지정
    currentIdx = 0, //좌우버튼 클릭했을 때 몇번째 슬라이드인지 확인하기 위해 지정
    slideCount = slide.length, //li 슬라이드 개수의 값
    slideWidth = 200, //슬라이드 하나의 넓이 지정
    slideMargin = 30, //슬라이드 사이의 간격 지정
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone() {
    //i가 0일때(첫번째 것), i가 li의 배열 숫자보다 작을때 계속 더한다
    for(var i =0; i<slideCount; i++) {
        //a.cloneNode(): 하나만 복사하고 싶을때, a.cloneNode(true): a의 자식요소 까지 전부 복사하고 싶을때
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone'); //클론된애들한테 클래스명 추가, 아마 구분을 위함인듯
        //a.appendChild(b) : a에 b를 자식요소로 추가한다
        slides.appendChild(cloneSlide);
    }

//slideCount가 li의 개수인데, 배열값으로 인식해야하니까 5번째 Li를 [4]라고 읽으려고 -1함
// i가 0보다 크거나 같을때 까지 i를 빼기 반복한다
    for(var i = slideCount -1; i>=0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b): a요소 앞에 b를 추가할때 사용
        slides.prepend(cloneSlide); 
    }

    updateWidth(); // for문이 진행되고 width값을 업데이트 한다. 정의는 밑에서

}
//앞뒤로 복사된 전체 슬라이드들의 전체 width값을 구하는 코드
// 길이 200 + 마진 30이라 1개당 230px인데 마지막꺼는 마진 포함안해서 -30해야함
function updateWidth() {
    //새로운 변수에 현재 슬라이드들(li)을 가져오고, 새롭게 지정할 슬라이드 개수값을 변수로 지정. 후에 새롭게 설정한 width값을 지정하면 위에 updateWidth로 적용됌
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    //slides의 width를 새로지정
    slides.style.width = newWidth;
}