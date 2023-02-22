import React from 'react'
import Select from 'react-select'
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
  width:1000px; height:300px;
  margin-top:50px;
  margin-bottom:100px;
  background:#f2f2f2;
  border-radius:20px;
  padding:30px;
`

const P = styled.p`
  font-size:3rem;
  font-weight:bold;
`


const options = [
  { value: '리액트', label: '리액트' },
  { value: '자바', label: '자바' },
  { value: '스프링', label: '스프링' },
  { value: '리액트 네이티브', label: '리액트 네이티브' },
  { value: '노드', label: '노드' },
]

const SelectBox = () => {


  return (
    <>
        <StMain>
            <Box>
                <P>Select</P>
                <Select options={options} />
            </Box>
        </StMain>
    </>
  );
}

export default SelectBox;
