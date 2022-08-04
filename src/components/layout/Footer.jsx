import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="around"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
         <big>Artibedded</big>
           
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Artibedded, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat style={{backgroundColor:"#a77bce", border:"none"}}  className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat style={{backgroundColor:"#a77bce", border:"none"}} className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat style={{backgroundColor:"#a77bce", border:"none"}} className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  )
}

export default Footer