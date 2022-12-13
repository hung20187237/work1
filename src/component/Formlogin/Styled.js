import styled from 'styled-components'
import { Button, Checkbox, Form, Input, Typography } from 'antd';


export const H1 = styled(Typography)`
    &:where(.css-dev-only-do-not-override-1hyej8k).ant-typography {
        color: black;
        font-size: 14px;
        font-weight: 450;
        padding: 0 8px;
    }
`

export const Link = styled.span`
    color: #038fde;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Span = styled.span`
    color: ${props =>props.color};
    font-size: ${props =>props.size};
    font-variant: tabular-nums;
    line-height: 1.3;
    list-style: none;
    font-feature-settings: 'tnum';
    font-weight: 400;
    padding-right: 4px;
`

export const Ring = styled.span`
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 34px;
    font-size: 16px;
    text-align: center;
    color: #038fde;
    border: solid 1px #038fde;
    border-radius: 50%;
`
export const Li = styled.div`
    padding: 0 5px;
    margin-bottom: 5px;
    line-height: 1;
`

export const ButtonStyled = styled(Button)`
    margin-right: 15px;
    cursor: pointer;
    line-height: 34px;
    display: inline-block;
    vertical-align: middle;
    background: #038fde;
    background-color: #038fde !important;
    border-color: #038fde !important;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    height: 36px;
    padding: 0 15px;
    border-radius: 4px;
`

export const FormItem = styled(Form.Item)`
    &:where(.css-dev-only-do-not-override-1hyej8k).ant-form {

    }
`