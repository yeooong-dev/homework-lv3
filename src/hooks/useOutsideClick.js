import { useRef, useEffect } from 'react';

export const useOutsideClick = (handler) => {
    const ref = useRef(null);
    useEffect(() => {
    function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
    handler();
    }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [ref, handler]);
    return {
    ref,
    };
    };

    export default useOutsideClick;

    // 커스텀 훅 : 재사용하기 위해 만듬 
    // 드롭다운
    // useRef : 돔 참조할때, 리렌더링 할 때 초기값이 되지 않도록
    // 지금같은 경우는 돔 참조 => 바깥 영역이 어딘지 알려면 특정 영역을 빼고 알려줘야 함 , 모달 컨테이너
    // addEventLisnter 
    // useEffet는 마운팅 됐을 때만 사용 가능 