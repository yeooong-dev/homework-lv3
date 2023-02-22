import React, { useRef, useState } from 'react';
import styled from 'styled-components';


//styled components
const StMain = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  width:1000px;
  margin-top:20px;
  border-Bottom:2px solid gray;

`
const P = styled.p`
  font-size:3rem;
  font-weight:bold;
`
const ModalContainer = styled.div`

`

const ModalBtn = styled.button`
  margin-bottom:50px;
  width:250px; height:50px;
  font-size:1.2rem;
  cursor:pointer;
  margin-right:50px;
  background-color:#efefef;
  border:none;
`

const ModalOverlay = styled.div`
  z-index:200;
  width:100%; max-width:600px;
  height:500px;
  border-radius:20px;
  overflow:hidden;
  position:fixed;
  top:50%; left:50%;
  transform:translate(-50%,-50%);
  background:white;
  text-align:center;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.3); 
`

const ModalP = styled.p`
  font-size:1.5rem;
  margin-top:160px;
  line-height:1.8;
`

const ModalBtn2 = styled.button`
  margin-bottom:50px;
  width:250px; height:50px;
  font-size:1.2rem;
  cursor:pointer;
  background-color:#4a4a4a;
  border:none;
  color:white;
`
const ModalOverlayCloseBtn = styled.button`
  width:140px; height:60px;
  margin-top:40px;
  margin-right:20px;
  border:none;
  background:#f9f9f9;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.2); 
  border-radius:10px;
  font-size:1.3rem;
  color:#2e2e2e;
  border:1px solid #efefef;
  cursor:pointer;
  font-weight:bold;
`

const ModalOverlayOpenBtn = styled.button`
  width:140px; height:60px;
  margin-top:20px;
  border:none;
  background:#2096f3;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.2); 
  color:white;
  border-radius:10px;
  font-size:1.3rem;
  cursor:pointer;
  font-weight:bold;
`

const ModalOverlay2 = styled.div`
  width:100%; max-width:600px;
  height:500px;
  border-radius:20px;
  overflow:hidden;
  position:absolute;
  top:50%; left:50%;
  transform:translate(-50%,-50%);
  background:white;
  text-align:center;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.3); 
`

const ModalOverlayCloseBtn2 = styled.button`
  position: absolute;
  top :50px; right: 50px;
  width:50px; height:50px;
  border:none;
  background:#2096f3;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.2);  
  border-radius:50%;
  font-size:1.5rem;
  color:white;
  cursor:pointer;
  font-weight:bold;
`
const ModalP2 = styled.p`
  font-size:1.5rem;
  margin-top:200px;
  line-height:1.8;
`

const ModalBackGround = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
`

const ModalBackGround2 = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
`

const ModalCon = styled.div`

`
const ModalCon2 = styled.div`

`


export const Modal = () => {
    // 모달 1 
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
      setIsOpen(!isOpen);
    };
  
    // 모달2
    const [isOpen2, setIsOpen2] = useState(false);

    const openModalHandler2 = () => {
      setIsOpen2(!isOpen2);
    };

    const outSection = useRef();

  return (
    <>
      <StMain>
        <Box>
          <P>Modal</P>
          {/* 취소, 확인 버튼이 있고 overlay 클릭시 모달이 안닫힘 */}
          <ModalContainer>
             <ModalBtn onClick={openModalHandler}>
               {isOpen ? "Open" : "Open Modal"}
             </ModalBtn>
             
                {isOpen ? (
                  <ModalBackGround>
                    <ModalOverlay onClick={!openModalHandler}>
                      <ModalCon onClick={!openModalHandler}>
                        <ModalP>닫기와 확인 버튼 2개가 있고, <br /> 외부 영역을 눌러도 모달이 닫히지 않아요.</ModalP>
                        <ModalOverlayCloseBtn onClick={openModalHandler}>닫기</ModalOverlayCloseBtn>
                        <ModalOverlayOpenBtn>확인</ModalOverlayOpenBtn> 
                      </ModalCon>
                      </ModalOverlay>
                    </ModalBackGround>
                  ) : null}
          </ModalContainer>
         
          {/* 닫기 버튼만 있고 overlay 클릭시 모달이 닫힘 */}
          <ModalContainer>
            <ModalBtn2 onClick={openModalHandler2}>
                {isOpen2 ? "Open" : "Open Modal"}
            </ModalBtn2>
            {
              isOpen2 === true
              ? (<ModalBackGround2 ref={outSection} onClick={(e)=>{
                if(outSection.current === e.target) {
                  setIsOpen2(false)
                }
              }}>
                <ModalOverlay2 onClick={!openModalHandler2}>
                  <ModalCon2 onClick={!openModalHandler2}>
                     <ModalP2>닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.</ModalP2>
                     <ModalOverlayCloseBtn2 onClick={openModalHandler2}>X</ModalOverlayCloseBtn2>
                  </ModalCon2>
                  </ModalOverlay2>
                </ModalBackGround2>) : null
            }      
          </ModalContainer>
        </Box>
      </StMain>
    </>
  );
}

export default Modal;
