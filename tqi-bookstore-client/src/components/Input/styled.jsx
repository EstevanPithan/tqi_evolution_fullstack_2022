import styled from 'styled-components'

export const InvalidInputBar = styled.input`
  border: 2px solid Red;
  border-radius: 10px;
  width: 100%;
  padding: 10px 10px 10px 10px;
  margin: 0 5px;
  color: Red;
}`

export const ValidInputBar = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  padding: 10px 10px 10px 10px;
  margin: 0 5px;
}`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 95%;
}`

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}`
