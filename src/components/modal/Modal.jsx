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
  z-index:10;
`

const ModalBackGround2 = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index:10;
`

const ModalCon = styled.div`

`
const ModalCon2 = styled.div`

`


export const Modal = () => {
    // ?????? 1 
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
      setIsOpen(!isOpen);
    };
  
    // ??????2
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
          {/* ??????, ?????? ????????? ?????? overlay ????????? ????????? ????????? */}
          <ModalContainer>
             <ModalBtn onClick={openModalHandler}>
               {isOpen ? "Open" : "Open Modal"}
             </ModalBtn>
             
                {isOpen ? (
                  <ModalBackGround>
                    <ModalOverlay onClick={!openModalHandler}>
                      <ModalCon onClick={!openModalHandler}>
                        <ModalP>????????? ?????? ?????? 2?????? ??????, <br /> ?????? ????????? ????????? ????????? ????????? ?????????.</ModalP>
                        <ModalOverlayCloseBtn onClick={openModalHandler}>??????</ModalOverlayCloseBtn>
                        <ModalOverlayOpenBtn>??????</ModalOverlayOpenBtn> 
                      </ModalCon>
                      </ModalOverlay>
                  </ModalBackGround>
                  ) : null}
          </ModalContainer>
         
          {/* ?????? ????????? ?????? overlay ????????? ????????? ?????? */}
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
                     <ModalP2>?????? ?????? 1?????? ??????, <br /> ?????? ????????? ????????? ????????? ?????????.</ModalP2>
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
