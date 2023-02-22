import styled from 'styled-components';
import { FcAbout } from "react-icons/fc";
import { FcLeave } from "react-icons/fc";

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
const Margin = styled.div`
  margin-bottom:50px;
`

const Pri = styled.button`
  width:320px; height:60px;
  border-radius:50px;
  border: 2px solid #5866dd;
  margin-right:40px;
  font-size:1.2rem;
  background: none;
  margin-bottom:20px;
  color: #5866dd;
  font-weight:bold;
  cursor:pointer;
  line-height:50px;
  box-shadow: 0px 10px 19px -10px rgba(137,148,231,0.77);
  -webkit-box-shadow: 0px 10px 19px -10px rgba(137,148,231,0.77);
  -moz-box-shadow: 0px 10px 19px -10px rgba(137,148,231,0.77);
`
const PriM = styled.button`
  width:200px; height:50px;
  border-radius:50px;
  border:none;
  margin-right:40px;
  font-size:1.2rem;
  background: #5866dd;
  color: white;
  font-weight:bold;
  cursor:pointer;
  box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
  -webkit-box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
  -moz-box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
`
const PriS = styled.button`
  width:150px; height:40px;
  border-radius:50px;
  border:none;
  font-size:1rem;
  background: #5866dd;
  color: white;
  font-weight:bold;
  cursor:pointer;
  box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
  -webkit-box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
  -moz-box-shadow: 0px 8px 12px -1px rgba(137,148,231,0.62);
`

const Nega = styled.button`
  width:320px; height:60px;
  border-radius:50px;
  border: 2px solid #f68194;
  margin-right:40px;
  font-size:1.2rem;
  background: none;
  color: #f68194;
  font-weight:bold;
  cursor:pointer;
  line-height:50px;
  margin-top:30px;
  margin-bottom:30px;
  box-shadow: 0px 10px 19px -10px rgba(246,129,148,0.59);
  -webkit-box-shadow: 0px 10px 19px -10px rgba(246,129,148,0.59);
  -moz-box-shadow: 0px 10px 19px -10px rgba(246,129,148,0.59);
`
const NegaM = styled.button`
  width:200px; height:50px;
  border-radius:50px;
  border:none;
  margin-right:40px;
  font-size:1.2rem;
  background: #f68194;
  color: white;
  font-weight:bold;
  cursor:pointer; 
  box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
  -webkit-box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
  -moz-box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
  
`
const NegaS = styled.button`
  width:150px; height:40px;
  border-radius:50px;
  border:none;
  font-size:1rem;
  background: #f68194;
  color: white;
  font-weight:bold;
  cursor:pointer;
  box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
  -webkit-box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
  -moz-box-shadow: 0px 8px 12px -1px rgba(246,129,148,0.49);
`


const Button = () => {
  return (
    <>
      <StMain>
        <Box>
          <P>Button</P>
          <div>
            <Pri onClick={()=>{
              alert('버튼을 만들었습니다.');
            }}>Large Primary Button <FcAbout size="25" /></Pri>
            <PriM>Medium</PriM>
            <PriS>Small</PriS>
          </div>

          <Margin>
            <Nega onClick={()=>{
              prompt('쉬운 것 같진 않네요?');
            }}>Large Negative Button <FcLeave size="25" /></Nega>
            <NegaM>Medium</NegaM>
            <NegaS>Small</NegaS>
          </Margin>
        </Box>
    </StMain>
    </>
  )
}

export default Button;