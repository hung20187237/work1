import styled from "styled-components";
import { Layout, Col, Row, Checkbox} from "antd";
import { MoreOutlined, StarOutlined } from "@ant-design/icons";
import {AiFillStar} from 'react-icons/ai'

const {Sider } = Layout;

export const SiderStyled = styled(Sider)`
  &.ant-layout-sider {
    max-width: 280px !important;
    flex: 0 0 auto !important;
    min-width: 200px;
    width: 280px !important;
    background: #003366 !important;
    overflow: hidden !important;
  }
`;

export const CheckboxGroup = styled(Checkbox.Group)`
    &.ant-checkbox-group {
        height: calc(100vh - 266px) !important;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
`;

export const RowCheckbox = styled(Row)`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 8px 28px;
    border-bottom: solid 1px #e8e8e8;
`;

export const Colcheckbox = styled(Col)`
    &.ant-col {
        position: absolute;
        inset: 0px;
        overflow: scroll;
        margin-right: -17px;
        margin-bottom: -17px;
        overflow-y: scroll !important;
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.direction{
        flex-wrap: ${(props) => props.wrap};
        flex-direction: ${(props) => props.direction};
    }
    &.cardmember{
        flex: 1 1 auto;
        max-width: calc(100% - 140px);
    }
    &.moduleflex{
        padding: 8px 28px;
        min-height: 65px;
        flex-wrap: wrap;
        align-items: center;
        border-bottom: solid 1px #e8e8e8;
    }
`;

export const Box = styled.div`
    display: block;
    flex: ${(props) => props.flex};
    margin-bottom: ${(props) => props.mgb} !important;
    &.colorgray{
        color: #8c8c8c !important;
    }
    &.boxlanguage{
        right: 32px;
        top: 52px;
        position: absolute;
        transform-origin: 160px -4px;
        padding-top: 10px;
        z-index: 1030;
    }
    &.popover{
        right: 10px;
        top: 6px;
        border-top-color: #fff;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: #fff;
        box-shadow: -2px -2px 5px rgb(0 0 0 / 6%);
        position: absolute;
        display: block;
        width: 8.48528137px;
        height: 8.48528137px;
        background: transparent;
        border-style: solid;
        border-width: 4.24264069px;
        transform: rotate(45deg);
    }
    &.mainlanguage{
        background-color: #fff;
        background-clip: padding-box;
        border-radius: 6px;
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    }
    &.languagepad{
        padding: 12px 16px;
        color: #545454;
    }
    &.languageover{
        padding: 12px 16px;
        color: #545454;
        height: 220px !important;
        width: 160px !important;
        margin: 0 -16px;
}
    }
`;

export const Text = styled.span`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${(props) => props.fs};
    &.useremail{
        word-break: break-all;
        margin-right: 0.5rem !important;
    }
`;

export const Dividerstyled = styled.span`
    display: inline-block;
    border-left: solid 1px #e8e8e8;
    height: 100%;
    width: 1px;
    margin: 0 12px;
`;

export const Checkboxstyled = styled(Checkbox)`
    &.ant-checkbox-wrapper {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    &.ant-checkbox-wrapper:hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

export const StarIcon = styled.div`
    &.anticon {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        &.anticon:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }
    &.gray {
        color: yellow;
    }
`;

export const MoreIcon = styled(MoreOutlined)`
    &.anticon {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 20px
    }
    &.anticon:hover {
        background-color: rgba(0,0,0,0.1);
    }
`
