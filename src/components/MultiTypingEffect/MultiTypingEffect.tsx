"use client";

import React, { useEffect, useState } from "react";
import styles from "./MultiTypingEffect.module.css";

type MultiTypingEffectProps = {
  texts: string[];
};

export default function MultiTypingEffect({ texts }: MultiTypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // props로 받은 문자열 배열에서의 인덱스
  const [isDeleting, setIsDeleting] = useState(false);

  const typingDelay = 60;
  const deletingDelay = 30;
  const endDelay = 1500;

  useEffect(() => {
    const currentText = texts[textIndex];
    // 타이머들을 관리하기 위한 변수를 선언함
    let timer: NodeJS.Timeout;

    // 현재 인덱스보다 한 글자 더 많은 문자를 displayText에 저장하여 타이핑 구현
    const typeChar = () => {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    };

    // 현재 인덱스보다 한 글자 더 적은 문자를 displayText에 저장하여 삭제 구현
    const deleteChar = () => {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    };

    // 삭제중이 아니고, charIndex가 전체 텍스트 길이보다 작으면 타이핑을 함
    if (!isDeleting && charIndex < currentText.length) {
      // 지연 시간 후에 한 글자를 추가하도록 함
      timer = setTimeout(typeChar, typingDelay);
      // 아래처럼 구현할 수도 있음. 아래의 경우 추가적인 기능을 추가하기 용이함
      // timer = setTimeout(() => {
      //   typeChar();
      // }, typingDelay);

      // 삭제 중이고 charIndex가 0보다 크면(삭제할 글자가 남아 있다면) 지연 시간 후에 한 글자를 삭제하도록 함
    } else if (isDeleting && charIndex > 0) {
      // 지연 시간 후에 한 글자를 삭제하도록 함
      timer = setTimeout(deleteChar, deletingDelay);

      // 삭제 중이고 charIndex가 0이면(삭제할 글자가 없다면) 다시 글자를 작성하기 위해 삭제중 여부를 false로 함
    } else if (isDeleting) {
      setIsDeleting(false);
      // 문자열의 텍스트를 모두 출력하면 다음 문자열 배열로 넘어가지만, 이미 배열의 마지막 요소라면 모듈러 연산으로 다시 0번째 요소로 넘어가게 됨
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

      // 삭제중이 아니고, charIndex가 전체 텍스트길이가 같은 경우이므로 텍스트를 모두 타이핑 한 경우임
    } else {
      // 다 쳤으니 잠시 지연 시간 동안 기다린 후에 삭제하도록 삭제 중을 true로 전환함
      timer = setTimeout(() => setIsDeleting(true), endDelay);
    }

    // 컴포넌트 언마운트, 혹은 의존성 배열의 것들이 하나라도 변경되면 클린업 함수를 실행하여 설정된 타이머를 지워버림
    return () => clearTimeout(timer);
    // 지연시간 후에 textIndex, charIndex, isDeleting 들이 변경되며 재랜더링 되므로, useEffect가 계속 반복하며 타이핑 효과를 갖도록 함
  }, [texts, textIndex, charIndex, isDeleting]);

  return (
    <div className={styles.typingEffect}>
      {displayText}
      <span className={styles.cursor} />
    </div>
  );
}
