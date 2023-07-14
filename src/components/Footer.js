import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
		right: '0',
        width: '100%',
        background: 'black',
        padding: '0',
      }}
      className='bg-dark text-center text-white'
    >
      <MDBContainer className='p-0' style={{ height: '50px', display: 'flex', justifyContent:'center',alignItems: 'center' }}>
        <section className='my-2'>
          <MDBBtn outline color='gray' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color='gray' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color='gray' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color='gray' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        </section>
      </MDBContainer>

      <div
        className='text-center py-2'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',color:'rgba(255, 255, 255, 0.2)' }}
      >
        © 2023 Work in Progress
      </div>
    </MDBFooter>
  );
}
