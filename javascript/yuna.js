$(document).ready(function () {
	//.navi의 li태그의 mouseover 이벤트 설정
	$(".navi > li")
		.mouseover(function () {
			//$(this) : 현재 선택된 태그(요소)
			//find('.submenu'):선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함
			//stop(): 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
			//slideDown(),slideUp() : jQuery 라이브러리에서 제공하는
			//함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함
			//선택한 요소의 height값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 함. 이때, 매개변수값(인수)500은 0.5초를 의미
			$(this).find(".submenu").stop().slideDown(500); //500ms = 0.5s
		})
		.mouseout(function () {
			$(this).find(".submenu").stop().slideUp(500);
		});

	//  //.imgslide a:gt(0):gt(index)은 index값보다 더 큰 값(Greater)을 가진 요소를 선택함. 0번째부터 계수하여 index 값보다 큰 값을 가져옴.
	// //여기서는 gt(0)이므로 1,2,3이 됨. 즉, 0보다 큰 인덱스는 hide()메서드 를 적용함
	// $('.imgslide a:gt(0)').hide();
	// //setInterval(function(){}), 3000: 일정시간마다 반복적으로 동작을 실행하게 함. 3000은 3000ml(3초)는 3초마다 반복 실행함
	// setInterval(function(){
	//     //가상 클래스 선택자로 부모 요소가 가지고 있는 자식 요소 중 첫번째를 선택함. imgslide의 자식 요소 a태그에서 첫번째를 선택하여 페이드 아웃 실행함
	//     $('.imgslide a:first-child').fadeOut()
	//     //다음 요소를 선택하여 페이드인 실행함
	//     .next('a').fadeIn()
	//     //끝에다 appendTo() 함수 내용을 붙여줌, 즉 선택한 요소를 .imgslide 선택자 요소의 자식 요소로 추가해줌
	//     .end().appendTo('.imgslide');},3000);

	$(function () {
		//('.tabmenu > li > a').click : .tabmenu 요소의 자식 요소<li>의 자식 요소인 a 태그 영역을 클릭하면
		$(".tabmenu > li > a").click(function () {
			//(this).parent().addClass("active") : 현재 태그의 부모 태그를 찾아 'active' 클래스를 추가해줌.
			//a태그의 부모 태그는 li 이므로, 클릭하면 li에 'active'클래스를 추가해줍니다
			$(this)
				.parent()
				.addClass("active")
				//.siblings().removeClass("axtive"):다른 형제 태그를 찾은 후 'active'클래스를 삭제해줍니다
				.siblings()
				.removeClass("active");
			return false;
			// return false : 클릭 이벤트 처리를 중단하고 함수를 호출한 곳으로
			// 즉시 돌아가도록 함. 이것은 HTML에서 태그들은 중첩되어 있기 때문에
			// <a> 태그를 클릭하면 이 요소를 감싸고 있는 부모 태그들도 클릭한
			// 것처럼 이벤트에 반응하게 됨. 이런 것이벤트 버블(Event bubbling)이라고 함.
			// 따라서, 현재 이벤트를 중지시키고, 이벤트가 부모 태그에 전달되지 않도록
			// 중지하기 위해서 return false를 사용함.
			// 단, return false를 사용하면 자바스크립해석기가 이 구문을 만나는 즉시
			// 코드 실행을 중지하기 때문에 return fals다음에 다른 문장을 쓰지 않도록 주의가 필요함.
		});
	});

	//$(".notice li:first").click 의미는".notice 요소의 후손 요소 중에서 "첫번째 요소를 클릭하면" 입니다.""

	$(".btmenu li:first").click(function () {
		//#layer과 일치하는 요소에 'active' 클래스를 추가함
		$("#layer").addClass("active");
	});

	//.btn 요소를 클릭하면
	$(".btn").click(function () {
		//#modal의 'active'클래스를 삭제함
		$("#layer").removeClass("active");
	});

	$(".imgslide span:last").click(function () {
		//#layer과 일치하는 요소에 'active' 클래스를 추가함
		$("#layer1").addClass("active");
	});

	//.btn 요소를 클릭하면
	$(".btn1").click(function () {
		//#modal의 'active'클래스를 삭제함
		$("#layer1").removeClass("active");
	});

	// 베가스 써먹기.
	$(function () {
		$(".imgslide").vegas({
			slides: [
				{
					video: {
						scr: ["vegas.mp4"],
						loop: true,
						mute: true,
					},
				},
			],
		});
	});

	$(function () {
		//쿠키("popup")의 값이 'none'이면 id값이 'notice_wrap'안 요소를 숨김
		if ($.cookie("popup") == "none") {
			$("#notice_wrap").hide();
		}
		// class 값이 'closeBtn'인 요소를 클릭하면 체크박스의 체크 유무에 따라 쿠키를 생성하여 3일간 저장함.
		var $expiresChk = $("#expiresChk");
		$(".closeBtn").on("click", closePop);
		function closePop() {
			if ($expiresChk.is(":checked")) {
				$.cookie("popup", "none", { expires: 3, path: "/" });
			}
			$("#notice_wrap").fadeOut("fast");
		}
	});
});
