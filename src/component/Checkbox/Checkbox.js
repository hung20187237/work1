import React, { useState } from "react";
import { SpanAvatar,  Avatar, BoxIcon } from "../../pages/Test4_2/Styled";
import { CheckboxGroup, Checkboxstyled, Colcheckbox, RowCheckbox, StarIcon, Flex, Box, Text, Dividerstyled, MoreIcon, } from "./Checkboxstyled";
import { message } from "antd";
import {  AiFillStar } from "react-icons/ai";
import {RiDeleteBin6Line} from 'react-icons/ri'



const plainOptions = [
    {
        name: 'Stella Johnson',
        job: 'CEO',
        email: 'stella.johnson',
        phone: '+1-215-659-7529',
    },
    {
        name: 'Garry Sobars',
        job: 'CFO',
        email: 'garry.sobars',
        phone: '+1-215-659-7529',
    },
    {
        name: 'Alex Dolgove',
        job: 'Developer',
        email: 'alex.dolgove',
        phone: '+1-215-659-7529',
    },
    {
        name: 'Domnic Brown',
        job: 'Developer',
        email: 'domnic.brown',
        phone: '+1-215-659-7529',
    },
    {
        name: 'Kadir M ',
        job: 'Developer',
        email: 'kadir.m',
        phone: '+1-215-659-7529',
    },
    {
        name: 'John Smith',
        job: 'Developer',
        email: 'john.smith',
        phone: '+1-215-659-7529',
    },
    {
        name: 'John Wick',
        job: 'Developer',
        email: 'john.wick',
        phone: '+1-215-659-7529',
    },
    {
        name: 'cave1',
        job: 'CEO',
        email: 'cave1',
        phone: '+1-215-659-7529',
    },

    {
        name: 'Name 1',
        job: 'CEO',
        email: 'name.1',
        phone: '+1-215-659-7529',
    },
    {
        name: 'Name 2',
        job: 'CEO',
        email: 'name.2',
        phone: '+1-215-659-7529',
    },
];

const Checkboxcontent = () => {
  const [checkedStar, setCheckedStar] = useState([]);
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const [show, setShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  const handleToggle = (index) => () => {
    const currentIndex = checkedStar.indexOf(index);
    const newChecked = [...checkedStar];
    

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    checkedStar.indexOf(index) !== -1 ?messageApi.info('Contact removed as star'):messageApi.info('Contact marked as star')
    setCheckedStar(newChecked);
  };

  const onChange = (list) => {
    console.log(list)
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    setShow(list.length > 0)
  };
  console.log(checkedList)
  
  const onCheckAllChange = (e) => {
    if (e.target.checked) {
        const listAllValue = plainOptions.map((item, index) => index);
        setCheckedList(listAllValue);
      } else {
        setCheckedList([]);
      }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    setShow(e.target.checked)
  };
  
  return (
    <>
      <Flex direction="row" className="moduleflex">
        <Checkboxstyled
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            style={{borderRadius: '2px'}}
            className= 'marginright'
        >
        </Checkboxstyled>
        {show?<BoxIcon>
          <RiDeleteBin6Line/>
        </BoxIcon>:null}
      </Flex>
      <CheckboxGroup value={checkedList} onChange={onChange}>
        <Colcheckbox>
          {plainOptions.map((options, index) => (
            <RowCheckbox >
                <Flex className="direction" wrap = 'wrap' direction = 'row' style={{paddingRight: '10px'}}>
                    <Checkboxstyled value={index} ></Checkboxstyled>
                    {checkedStar.indexOf(index) !== -1 ?
                        <StarIcon className="gray anticon reponsive" onClick={handleToggle(index)}>
                            <AiFillStar/>
                        </StarIcon>
                        :<StarIcon className="anticon reponsive" onClick={handleToggle(index)}>
                            <AiFillStar/>
                        </StarIcon>
                    }    
                        
                    {contextHolder}
                    <SpanAvatar className="reponsive" style={{marginLeft: '0.5rem'}}>
                        <Avatar src="https://wieldy.g-axon.work/assets/images/avatar/domnic-harris.png"/>
                    </SpanAvatar>
                </Flex>
                <Flex className="direction cardmember reponsive" wrap = 'wrap' direction = 'row'>
                    <Box flex = '1'>
                        <Box mgb = '0.25rem'>
                            <Text fs = '15px' wid = '100%'>{options.name}</Text>
                            <Dividerstyled>&nbsp;</Dividerstyled>
                            <Text wid = '100%'>{options.job}</Text>
                        </Box>
                        <Box className="colorgray">
                            <Text className="useremail" dp = 'inline-block'>{options.email}@example.com</Text>
                            <Text dp = 'inline-block'>{options.phone}</Text>
                        </Box>
                    </Box>
                    <MoreIcon/>
                </Flex>
              
            </RowCheckbox>
          ))}
        </Colcheckbox>
      </CheckboxGroup>
    </>
  );
};
export default Checkboxcontent;
