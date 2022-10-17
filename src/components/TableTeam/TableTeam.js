import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import './TableTeam.css'


const TableTeam = ({ closeMobileMenu }) => {
    return (
        <div className='center'>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Equipe :</th>
                        <td>
                            <Link to='/InternshipReport/DataScience' className='link' onClick={closeMobileMenu}>DataScience</Link>
                        </td>
                        <td>
                            <Link to='/InternshipReport/BusinessIntelligence' className='link' onClick={closeMobileMenu}>Business Intelligence</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Manager :</th>
                        <td>Joseph Emeras</td>
                        <td>Nathanael Vandenberghe</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

  
export default TableTeam;