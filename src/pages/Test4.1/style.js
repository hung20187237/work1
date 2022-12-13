
import {Typography} from 'antd';
import styled from 'styled-components'



export const Wrapper = styled.section`
  background: rgba(3,143,222);
  height: 50vh;
  position: relative;
  max-width: 680px;
  width: 94%;
  margin: 25vh auto;
  border-radius: 15px;
  display: flex;
  box-shadow: 5px 5px 4px 6px lightblue;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export const BgBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.background};
    background-image: url(${props => props.image});
    opacity: ${props => props.opa};
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px
    
`;

export const BoxText = styled.div`
    z-index: ${props => props.zindx};
    position: relative;
    margin-bottom: 65%;
    display: block;
    box-sizing: border-box;
`

export const PropsBox = styled.div(props => ({
    backgroundColor: props.background,
    minWidth: 120,
    padding: '35px 35px 20px',
    flex: props.flex,
    borderTopLeftRadius: props.left,
    borderBottomLeftRadius: props.left,
    borderTopRightRadius: props.right,
    borderBottomRightRadius: props.right,
    position: 'relative',

}));


export const H1 = styled(Typography)`
    &:where(.css-dev-only-do-not-override-1hyej8k).ant-typography {
        color: white;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 1em
    }
`

  