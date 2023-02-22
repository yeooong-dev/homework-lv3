import { useState } from 'react';
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
const Margin = styled.div`
  margin-bottom:50px;
`
const InputName = styled.input`
  margin-bottom:50px;
  width:250px; height:45px;
  font-size:1.2rem;
  cursor:pointer;
  margin-right:30px;
  border: 2px solid gray;
  border-radius:20px;
  padding-left:1.5rem;
`
const InputPrice = styled.input`
  margin-bottom:50px;
  width:250px; height:45px;
  font-size:1.2rem;
  cursor:pointer;
  margin-right:50px;
  border: 2px solid gray;
  border-radius:20px;
  padding-left:1.5rem;
`

const AddBtn = styled.button`
  width:100px; height:50px;
  font-size:1.5rem;
  background-color:#ffc007;
  border:none;
  color:white;
  border-radius:50px;
  cursor:pointer;
`

const Input = () => {
  
  const [name, setName] = useState(''); 
  const [price,setPrice] = useState('');

  const idChangeHandler = (e) => {
    setName(e.target.value);
    
  }
  
  const priceChangeHandler = (e) => {
    const res = e.target.value.replaceAll(',','').replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    setPrice(res);
  }

  return (
    <>
      <StMain>
            <Box>
              <Margin>
                <P>Input</P>
                  이름 &nbsp; <InputName placeholder='이름을 입력해 주세요.' type="text" value={name} onChange={idChangeHandler}/>

                  가격 &nbsp; <InputPrice placeholder='가격을 입력해 주세요.' id="number" type="text" value={price} onChange={priceChangeHandler}/>

                <AddBtn onClick={()=>{
                  alert(`name은 ${name}이며 price는 ${price}입니다.`)
                }}>저장</AddBtn>
              </Margin>
            </Box>
      </StMain>
    </>
  )
}

export default Input;
