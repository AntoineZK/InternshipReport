import React from 'react'
import { SideBarContainer, IconSideBar, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './Styles'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} toggle={toggle}>
        <IconSideBar onClick={toggle}>
            <CloseIcon />
        </IconSideBar>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='/InternshipReport'>Home</SideBarLink>
                <SideBarLink to='/InternshipReport/Plan'>Plan</SideBarLink>
                <SideBarLink to='/InternshipReport/Remerciements'>Remerciements</SideBarLink>
                <SideBarLink to='/InternshipReport/Introduction'>Introduction</SideBarLink>
                <SideBarLink to='/InternshipReport/Développement'>Développement</SideBarLink>
                <SideBarLink to='/InternshipReport/Conclusion'>Conclusion</SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar