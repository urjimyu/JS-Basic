# JS-Basics
- Vanilla JS - Chrome Clone Coding(Nomad Coders)

# 2. Intro to JS

- function → 콘솔에서 자스를 쉽게 다룰 수 있다.
- Browser : HTML을 연다
- HTML : JS, CSS를 가져온다(접착제 역할!)
- HTML로 CSS, JS 불러오는 방법
    - `<link rel="stylesheet" href="css파일명">`
    - 자스는 주로 끝에서 `<script src="js파일명"></script>`

- 기본 자료형
    - number
        - integer(정수)
        - float(소수)
            - 자스는 타입을 알아서 인식함
    - text(문자)
        - “~~”
        - 더하기 가능
    
- 변수
    - console.log() ⇒ 콘솔에게 메시지를 보낼 수 있다(괄호 안에는 숫자나 string 입력 가능)
    - const : 상수 ⇒ 이후 값 변경 불가
    - let ⇒ 이후 값 변경 가능(업뎃 가능)
    - 변수명은 공백 불가, 카멜식으로 표기
    - js는 위에서 아래로 실행된다!
    - 프로그램에서 필요할 때만 let으로 사용
    - var(과거) ⇒ 언제든 어디서든 업뎃 가능했다. ⇒ 언어를 통한 보호가 불가하다
    
- **boolean**
    - true 켜짐
    - false 꺼짐
- null : 아무것도 없음(defined 된 상태이긴 하다! 자연적으로 발생하는 게 아님. 값이 없다는 걸 명확히 하는 것.)
- undefined : 컴퓨터가 변수에 대해 인지하고 있지만 값이 없는 상태
- **Array** 배열
    - 데이터 정리하기(데이터 구조)
    - []로 지정
    - 안에 어떤 종류든 들어올 수 있다
    - 하나의 변수 안에 데이터의 리스트를 가지는 것이 목적이다
    
- **object**
    - 형식 : {변수명: 값,}
    - 연관된 property드를 그룹으로 묶어 저장해야 될 때
    - 
- **function**
    - 반복해서 사용할 수 있는 코드 조각
    - 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다
    - argument(인수)를 보내면 편리하다
        - 함수 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법
- r**eturn**
    - console.log → console에 뭔가 log(기록해서 보여주기)하는 것
    - 우리는 근데 콘솔 밖에서 표기하거나 변경하거나 데이터를 받아서 쓰기를 바라는 것.
    - 따라서 console.log 말고 다른 게 필요하다 → returns
- **conditional(조건문)**
    - 참/거짓 알려줌
    - if, else
    - **prompt** : 사용자에게 창을 띄운다
        - argument 2개 받는다(message(문자), default)
        - 하지만 JS의 실행을 멈춘다.
        - CSS 적용도 안됨.
        - 팝업 제한되는 브라우저도 있다.
        - 따라서 이제는 거의 안 씀.
    - **typeof** ⇒ 자료형 보여준다.
    - **parseInt** : string을 Int로
    - NaN(Not a Number)
    - isNaN ⇒ Boolean 반환
    - operater(연산자)
        - && : and (둘 다 참이어야 true)
        - === : 값이 같을 때 true
   
  # 3. JS on the browser
   - 브라우저의 핵심 object
    - document : 접근 가능한 HTML 가져옴(JS는 이미 HTML과 연결되어 있다!)
        - HTML 코드를 JS 관점으로 보는 것
        - title
    - 함수로 id 등을 이용해서 찾으면 JS에서 HTML 내용 수정이 가능하다!
    - Searching for Elements
        - `getElementsById()`
        - `getElemetsByClassName()`
        - `getElementsByTagName()`
        - `querySelector` : element를 CSS 방식으로 검색 가능. 조건에 맞는 첫 번째 것만 가져옴.
        - `querySelectorAll` : 조건에 맞는 모든 애들 다 가져옴.
    - JS 파일이 있기 때문에 자스로 HTML 내용 가져올 수 있는 것!
        - 더 구체적으로는 document가 js 파일을 load 하기에 가능한 것!
    - event : JS는 event를 listen할 수 있다.
    - MDN Web Docs - HTML Element -
    - console.dir를 통해 element 출력하면 사용 가능한 event 찾아볼 ㅅ ㅜ있음.
    - 여기서는 property 앞에 on 붙어있으므로 쓸 떄는 떼고 사용
    - innerText : ??
    - title.onclick = handleTitleClick;도 title.addEventListener(”click”, handleTitleClick);도 모두 가능하지만 후자의 경우 .removeEventListener로 이벤트리스너를 모두 제거하는 게 가능하다는 장점이 있다.
    - JS에서도 가능하지만 스타일은 CSS에서 바꾸는 것이 바람직하다!
    - JS 사용방식
        - element를 찾는다
        - event를 listen 한다
        - 그 event에 반응하게 만든다
    - activity에서 class name 추가 변경할 때 버그 가능성이 있다(초기 클래스 이름을 바꿔버린다던지,,)
        - classList 사용하기
            - toggle function : class list에 class name 존재하는지 확인해줌. 특정 클래스명이 있으면 제거, 없으면 추가.
                - 공식 설명에 따르면 토큰을 확인하는 함수
                
    # 4. Login

    - 유저에게 받은 정보를 화면에 표시하기
    - HTML 만들고 거기 엘리먼트를 가져와서 하는 것
    - 조건문 일일이 치는 것보다는 브라우저 도움을 받을 수 있으면 받는 게 좋다
    - input 안에 있는 button 누르거나 type이 submit인 input을 클릭하면 입력값이 submit 된다.
    - local storage : 브라우저에 뭔가 저장 가능하게 해줌.
        - 개발자도구 사용해서 local storage 확인 가능
        - localStorage.setItem(”키값”, “내용”)
        - localStorage.getItem(”키값”) : 값 불러오기
        - localStorage.removeItem(””)

    # 5. Clock

    - Intervals
    - 파일 분리해서 관리하는 방법(divide and conquer)
    - Interval : 매번 일어나야 하는 무언가
        - ex) 매 2초
        - 내장함수 : `setInterval()`, `setTimeout()`
    - Timeout
    - padStart : 문자열 앞쪽에 패딩 채워달라
        - padEnd는 뒷쪽에 패딩 추가
    - 형변환 : String() 이런 식으로
