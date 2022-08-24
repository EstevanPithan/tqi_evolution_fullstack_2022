import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}`

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
}`

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
