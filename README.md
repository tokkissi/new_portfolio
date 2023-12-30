# New\_Portfolio

본 프로젝트는 토끼씨의 개인 포트폴리오 웹사이트입니다

배포 URL: [https://new-portfolio-phi-taupe.vercel.app](https://new-portfolio-phi-taupe.vercel.app)  
  
  
  
  

![브떱제작로고](https://github.com/tokkissi/new_portfolio/assets/53216523/1d2589dc-35b0-4a37-aefc-4336821e705c)

  
  

---

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [사용한 기술 스택](#사용한-기술-스택)
3. [기능 설명 및 시연 영상](#기능-설명-및-시연-영상)
4. [개발자 정보](#개발자-정보)

---

## 프로젝트 소개

이 프로젝트는 **TypeScript**와 **Next.js 14**을 활용해 만든 개인 포트폴리오 웹사이트 입니다.  
  
**반응형 웹디자인**으로 제작하였고 모바일, 태블릿, 데스크탑 등의 **모든 해상도를 지원**합니다.  
  
기존 프로젝트의 디자인 및 구성에 미흡함을 느껴서 친구인 디자이너 브떱에게 디자인 부분에 조언을 구하여 새로 제작하였습니다.  
  
주요 기능으로는 타이핑 애니메이션, 카드 뒤집기, 3D 캐러셀, 카드 광택 및 조명 효과, 무한 재생 슬라이드, 이메일 전송 등이 있습니다.  
  
되도록 라이브러리를 적게 사용하여 구현하였습니다.  
  
사용한 라이브러리는 다음과 같습니다. nodemailer, react-icons, react-spinners, zustand, yup

---

## 사용한 기술 스택

-   Next.js 14
-   TypeScript
-   Tailwind CSS
-   Zustand

---

## 기능 설명 및 시연 영상

-   **multi string의 multiline typing 효과**:  
    여러 문자열을 실제 유저가 타이핑 하듯이 한 글자씩 여러줄을 타이핑치며 작성하고, 한 글자씩 지우는 효과를 구현하였습니다. **(no library)**  
      
    🛠️ 구현 상세보기: [https://tokkic.tistory.com/350](https://tokkic.tistory.com/350)  
    ![multi-line-typing](https://github.com/tokkissi/new_portfolio/assets/53216523/999b6d85-4861-4687-b59f-1c98344d3540)

---

-   **카드 뒤집기 효과**:  
    카드를 클릭하거나, 클릭하지 않아도 몇 초 후에 자동으로 카드가 뒤집히며 뒷면의 이미지를 보이도록 구현하였습니다. **(no library)**  
      
    🛠️구현 상세보기: [https://tokkic.tistory.com/351](https://tokkic.tistory.com/351)

![card-flip](https://github.com/tokkissi/new_portfolio/assets/53216523/433bd6dd-ef76-4d4e-b264-df9288796c2c)

---

-   **3D 캐러셀**:  
    `useState`와 CSS의 `transform: translateX, translateY`를 이용해 3D 캐러셀을 구현하였습니다. **(no library)**  
      
    🛠️구현 상세보기: [https://tokkic.tistory.com/352](https://tokkic.tistory.com/352)

![carousel](https://github.com/tokkissi/new_portfolio/assets/53216523/c734195d-88f4-4750-bcc7-f7e5c1ad1a7a)

---

-   **카드 광택 효과**:  
    카드 위에 오버레이 요소로 반투명한 선형 그라데이션을 그리고 포인터의 위치를 계산하여, 그라데이션의 위치를 이동하여 광택 효과를 구현하였습니다. **(no library)**  
      
    🛠️구현 상세보기: [https://tokkic.tistory.com/354](https://tokkic.tistory.com/354)

![광택](https://github.com/tokkissi/new_portfolio/assets/53216523/23b96580-c9fa-4cdb-acc9-3a06718e8332)

---

-   **카드 조명 효과**:  
    카드 위에 오버레이 요소로 반투명한 검은색을 설정한 후, 원형 그라데이션을 mix-blend-mode로 hard-light 값을 주어 빛이 비추듯한 조명 효과를 주었습니다. **(no library)**  
      
    🛠️구현 상세보기: [https://tokkic.tistory.com/353](https://tokkic.tistory.com/353)

![조명](https://github.com/tokkissi/new_portfolio/assets/53216523/8f48345b-6467-4506-a460-b2ca74b35679)

---

-   **무한 재생 슬라이드**:  
    화면 크기를 가득 채울만큼 이미지 요소 배열을 이어 붙이고, 한사이클 이동할 만큼만 이동시키도록 애니메이션을 만들어 끊김없이 무한히 자동재생 하도록 구현하였습니다. **(no library)**  
      
    🛠️구현 상세보기: [https://tokkic.tistory.com/355](https://tokkic.tistory.com/355)

![슬라이드](https://github.com/tokkissi/new_portfolio/assets/53216523/8aed8d96-26fa-48ef-8a9f-75c6538409b9)

---

-   **이메일 전송**:  
    `nodemailer`와 `yup` 라이브러리를 사용하여 입력 유효성 검사와, 이메일을 전송 기능을 구현하였습니다.  
      
    

![메일전송](https://github.com/tokkissi/new_portfolio/assets/53216523/6103edcd-4859-4d3f-9568-41cc818445b8)

  
  

## 개발자 정보

-   개발자: tokkissi
-   이메일: [alal4674@gmail.com](mailto:alal4674@gmail.com)
-   GitHub: [https://github.com/tokkissi](https://github.com/tokkissi)

이 프로젝트는 Vercel을 통해 빌드 및 배포되었습니다.
