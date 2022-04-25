const Footer = () => {
    return ( 
        
        <div className="container-fluid">
          <footer className="text-gray">
            <div className="row justify-content-between">
              <section className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="font-weight-bolder text-white font-size-xlarge">
                  <img src="/footerlogo.svg" alt="Footer Logo" />
                </div>
                <div className="text-gray">
                  <small>Privacy Policy</small> <br />
                  <small>Terms of Use</small> <br />
                  <small>Copyright &copy;. All Rights Reserved</small>
                </div>
              </section>
              <section className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <h1 className="textSecondColor hotLinks" style={{display:"table",margin:"auto",fontFamily:"cambria"}}><i>Hot Links</i></h1>
                <div>
                  <ul>
                    <li>Are robots going to replace humans?</li>
                    <li>Is the research on Mars secure?</li>
                    <li>Is Tesla-autopilot confirmed as reliable?</li>
                    <li>Is programming worth it?</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="footerAddition">
              <span>Re-designed and created by aimecyuzuzo5@gmail.com</span>
              <span>Inspiration from dribble</span>
            </div>
          </footer>
        </div>
     );
}
 
export default Footer;