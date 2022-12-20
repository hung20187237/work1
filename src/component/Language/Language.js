import React from 'react'
import { Li, List, Text } from '../../pages/Test4_2/Styled'
import { Box } from '../Checkbox/Checkboxstyled'
import {AiFillFlag} from 'react-icons/ai'

export default function Language() {

    const liststext = [
        "Vietnamese",
        "Chinese",
        "English",
        "Spanish",
        "Italian",
        "French",
        "Arabic"
    ];

  return (
    <Box className='boxlanguage'>
        <Box>
            <Box className='popover'><span></span></Box>
            <Box className='mainlanguage'>
                <Box className='languagepad'>
                    <Box className='languageover'>
                        <List className='listlanguage'>
                            {liststext.map((text) => (
                                <Li className='languageitem'>
                                    <AiFillFlag/>
                                    <Text>{text}</Text>
                                </Li>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
