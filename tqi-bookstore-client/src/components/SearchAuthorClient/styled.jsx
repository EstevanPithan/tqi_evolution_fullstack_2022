import styled from 'styled-components'

export const WrapperContent = styled.div`
  width: 90%;
  max-height: 130px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  h2 {
    font-size: 20px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h2 {
    font-size: 20px;
  }
}`
