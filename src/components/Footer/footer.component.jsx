import React from 'react'

function Footer(props) {
    return (
        <div className="footer d-flex justify-content-between">
            <h5 className="copy-details d-flex align-items-center m-0"><span>&copy; 2020 by Vanickel Labs.</span> <span>(A Software Consultancy Company)</span></h5>
            <h5 className="privacy-and-terms d-flex align-items-center m-0">
                <p className="privacy m-0 pr-5">Privacy</p>
                <p className="terms m-0 pl-5">Terms & Conditions</p>
            </h5>
        </div>
    )
}

export default Footer
