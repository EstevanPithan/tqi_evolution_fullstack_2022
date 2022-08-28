import styled from 'styled-components'

export const WrapperContent = styled.div`
  width: 100%;
  max-height: 130px;
  padding: 2px;
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
  align-items: flex-start;
  flex-direction: column;
  width: 95%;
  h2 {
    font-size: 20px;
  }
}`
