import React from 'react'
import { SideBarContainer, IconSideBar, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './Styles'

const sections = [
    {title: 'Home', link: '/InternshipReport'},
	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
	{title: 'Plan', link: '/InternshipReport/Plan'},
	{title: 'Introduction', link: '/InternshipReport/Introduction'},
	{title: 'Développement', link: '/InternshipReport/Développement'},
	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
];

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} toggle={toggle}>
            <IconSideBar onClick={toggle}>
                <CloseIcon />
            </IconSideBar>
            <SideBarWrapper>
                <SideBarMenu>
                    {sections.map((section) => (
                    <SideBarLink key={section.link} to={section.link}>
                        {section.title}
                    </SideBarLink>
                    ))}
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar