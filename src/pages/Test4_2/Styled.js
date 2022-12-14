import styled from "styled-components";
import { Drawer, Input, Layout, Menu, Modal} from "antd";

const { Header, Content, Footer, Sider } = Layout;


export const SiderStyled = styled(Sider)`
  &.ant-layout-sider {
    max-width: 280px !important;
    flex: 0 0 auto !important;
    min-width: 200px;
    width: 280px !important;
    background: #003366 !important;
    overflow: hidden !important;
  }
  &.reponsive {
    @media (max-width: 1266px){
      width: 240px !important;
    }

    @media (max-width: 991px){
      width: 0 !important;
      min-width: 0 !important;
    }


  }
`;

export const DrawerStyled = styled(Drawer)`
  &.ant-drawer-content {
    position: relative;
    z-index: 1;
    background-clip: padding-box;
    border: 0;
  }
  .ant-drawer-body {
    flex-grow: 1;
    padding: 0;
  }
`;

export const ModalStyled = styled(Modal)`
  &.ant-modal {
    margin: 0 auto;
    transform-origin: 29.2px 87px;
  }
  .ant-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 6px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    padding: 0;
  }
  .ant-modal-header {
    padding: 16px 24px;
    color: #545454;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 6px 6px 0 0;
  }
  .ant-modal-title {
    margin: 0;
    color: #535353;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
  }
  .ant-modal-body {
    padding: 24px;
    font-size: 14px;
    line-height: 1.3;
    word-wrap: break-word;
  }
  .ant-modal-footer {
    padding: 10px 16px;
    text-align: right;
    background: transparent;
    border-top: 1px solid #e8e8e8;
    border-radius: 0 0 6px 6px;
  }

`;

export const DrawerStyled2 = styled(DrawerStyled)`
  &.ant-drawer-body {
    flex-grow: 1;
    padding: 0;
  }
`

export const ContentStyled = styled(Content)`
  &.ant-layout-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      flex: 1 1 auto;
      max-width: calc(100% - 230px - 1px);
  }
  &.reponsive {
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
`;

export const Footerstyled = styled(Footer)`
  &.ant-layout-footer{
    padding: 14px 32px;
    color: #545454;
    font-size: 14px;
    background: #fffffe;
    border-top: solid 1px #e8e8e8;
  }
`;

export const Sidercus = styled(Sider)`
  &.sidercontent {
    background-color: #ffffff;
    border-right: solid 1px #e8e8e8;
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    flex: 0 1 230px !important;
    min-width: 230px !important;
  }
  &.siderdrawer{
    min-width: 260px !important;
    background-color: #ffffff;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  &.reponsive {
    @media (max-width: 992px){
      display: none !important;
    }
  }
`;

export const HeaderStyled = styled(Header)`
  &.ant-layout-header {
    box-shadow: 0 0 4px 4px rgb(0 0 0 / 8%);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    padding: 0 32px;
    height: 72px;
    position: relative;
    z-index: 10;
    color: #262626;
    background: #fefefe;
  }
  &.reponsive {
    @media (max-width: 991px){
      padding: 0 15px;
    }
  }
`;

export const SiderHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: none;
  padding: 10px 30px 10px 70px;
  height: 72px;
  position: relative;
  z-index: 1;
  justify-content: center;
`;
export const SiderAdmin = styled.div`
  padding: 30px 10px 10px;
  margin: 0 20px 10px;
  border-bottom: solid 1px #e8e8e8;
  border-bottom-color: #038fdd;
  color: #038fdd;
`;
export const CardUser = styled.div`
  margin-bottom: 1.5rem !important;
  align-items: center !important;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  font-weight: 400;
  font-size: 14px;
`;
export const SpanAvatar = styled.span`
    transition: all .3s ease-out;
    position: relative;
    margin-right: 1rem !important;
    height: 40px !important;
    width: 40px !important;
    line-height: 40px !important;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;

  &.reponsive{
    @media (max-width: 576px) {
      display: none !important;
    }
  }
    
}
`;
export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const SpanName = styled.span`
  color: #038fdd;
  font-weight: 400;
  font-size: 14px;
`;



export const MenuIcon = styled(Menu)`
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu-dark {
    color: #038fdd !important;
    background: #003366 !important;
    font-size: 20px !important;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu
    .ant-menu-item
    .anticon {
    font-size: 20px !important;
  }
`;

export const BoxIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
  }
`;

export const BoxScroll = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 72px - 145px) !important;
`;
export const ScrollBar = styled.div`
  position: absolute;
  width: 6px;
  transition: opacity 200ms ease 0s;
  opacity: 0;
  right: 2px;
  bottom: 2px;
  top: 2px;
  border-radius: 3px;
`;

export const BoxMenu = styled.div`
  position: absolute;
  inset: 0px;
  overflow: scroll;
  margin-right: -17px;
`;

export const MenuItem = styled(Menu)`
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu-dark {
    color: #038fdd !important;
    background: #003366 !important;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu-dark
    .ant-menu-item-group-title {
    color: #038fdd !important;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu-dark.ant-menu-inline
    .ant-menu-sub.ant-menu-inline {
    background: #003366 !important;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu
    .ant-menu-item-group
    .ant-menu-item-group-list {
    padding-left: 40px !important;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu
    .ant-menu-item-group-title {
    padding: 12px 30px;
  }
  &:where(.css-dev-only-do-not-override-1hyej8k).ant-menu .ant-menu-item-icon {
    font-size: 20px !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
  flex-wrap: nowrap;
  height: ${(props) => props.heg};
  width: ${(props) => props.wid};

  &.marginauto{
    align-items: center;
    margin-left: auto;
  }
  &.moduleflex{
    padding: 8px 28px;
    min-height: 65px;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: solid 1px #e8e8e8;
}
  }
`;
export const Box = styled.div`
  &.boxheader {
    padding: 10px;
    min-height: 79px;
    border-bottom: solid 1px #e8e8e8;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;
    color: #545454;
  }
  &.boxcard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 20px;
  }
  &.boxcontent {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 5;
  }
  &.contentmain {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 201px) !important;
  }
  &.contentrepon {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 79px) !important;
  }
  &.contentscroll {
    position: absolute;
    inset: 0px;
    overflow: scroll;
    margin-right: -17px;
    margin-bottom: -17px;
    overflow-y: scroll !important;
  }
  &.boxadd {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 24px;
  }
  &.flex {
    display: flex;
    flex-wrap: nowrap;
  }
  &.headercontent {
    padding: 10px 26px;
    min-height: 79px;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: solid 1px #e8e8e8;
  }
  &.modulebox{
    background-color: #ffffff;
    flex-direction: column;
    flex: 1 1 auto;

  }
  &.modalbox{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.modalboxavatar{
    margin-left: 16px;
    order: 2;
  }
  &.modalforminput{
    flex: 1;
    order: 1;
  }
  &.modalboxinput{
    margin-bottom: 10px;
  }
  &.searchbarcontent {
    width: 350px;
    position: relative;
    display: block !important;

    @media (max-width: 1199px){
      width: 150px;
    }

    @media (max-width: 576px){
      display: none !important;
    }
  }
  &.menumedia {
    display: flex !important;

    @media (min-width: 992px){
      display: none !important;
    }
  }


`;
export const Button = styled.button`
  &.buttonadd {
    cursor: pointer;
    margin-bottom: 0;
    height: 36px;
    display: block;
    width: 100%;
    line-height: 34px;
    background: #038fde;
    background-color: #038fde !important;
    border-color: #038fde !important;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    color: #ffffff !important;
    position: relative;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border: solid 1px #d9d9d9;
    padding: 0 15px;
    font-size: 14px;
    outline: 0;
    border-radius: 4px;
  }

  &.boxnav {
    padding: 20px 0;
  }
`;
export const List = styled.ul`
  &.listsider {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
  &.listlanguage{
    list-style: none;
    margin: 0 16px;
    padding-left: 0;
  }
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  &.languageitem{
    border-bottom: solid 1px #e8e8e8;
    padding: 5px 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const InputStyled = styled(Input)`
  &.ant-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 7.9px 11px;
    color: #545454;
    font-size: 14px;
    line-height: 1.3;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    transition: all .3s;
  }
`

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.color};

  &.textcard {
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  &.buttontext {
    font-weight: 500;
    display: inline-block;
  }
  &.textli{
    font-weight: 500;
    vertical-align: middle;
    padding: 5px 29px;
    color: #999;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
  }

  &.blue{
    color: #038fde !important;
  }

`;




export const PropsBox = styled.div((props) => ({
  backgroundColor: props.background,
  width: props.wid,
  height: props.heg,
  margin: props.mg,
  display: props.display,
  borderTopLeftRadius: props.left,
  borderBottomLeftRadius: props.left,
  borderTopRightRadius: props.right,
  borderBottomRightRadius: props.right,
  position: "relative",
  boxSizing: "border-box",
  lineHeight: 1,
}));
