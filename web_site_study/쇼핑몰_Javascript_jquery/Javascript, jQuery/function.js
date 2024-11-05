
const $thmbs = document.querySelectorAll('.thmb>a');
const $screen = document.getElementById('screen');
const $prev = document.querySelector('.prev>a');
const $next = document.querySelector('.next>a');


let newIdx = 0;
let oldIdx = newIdx;




/*<이미지 포커스 전환 > :
화면에 표시 될 이미지와 텍스트*/
const changeFocus = function($old, $new){
	$old.parentElement.classList.remove('on');
	$new.parentElement.classList.add('on');
	/*src 주소와 alt값을 각각 big부분에 대입하여 보여줌 */
	const bigSrc = $new.getAttribute('href');
	const bigAlt = $new.firstElementChild.getAttribute('alt')
	$screen.firstElementChild.setAttribute('src',bigSrc);
	$screen.firstElementChild.setAttribute('alt',bigAlt);
};

/*이전*/
$prev.addEventListener
('click',function(evt){
	evt.preventDefault();
	oldIdx = newIdx;
	if(oldIdx>0) newIdx--;
	else newIdx = 8;

	changeFocus
	($thmbs[oldIdx],$thmbs[newIdx]);
});


/*다음*/
$next.addEventListener
('click',function(evt){
	evt.preventDefault();
	oldIdx = newIdx;
	if(oldIdx<8) newIdx++;
	else newIdx = 0;

	changeFocus
	($thmbs[oldIdx],$thmbs[newIdx]);
});


/*이전/다음 버튼 누를때마다 바뀌는 섬네일*/
for(let i=0; i<$thmbs.length; i++){
	$thmbs[i].addEventListener('click',function(evt){
		evt.preventDefault();
		
		oldIdx = newIdx;
		newIdx = i;
		
		changeFocus($thmbs[oldIdx],this);
	});
}