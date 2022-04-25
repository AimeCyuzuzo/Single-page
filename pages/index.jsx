import Image from "next/image";

const Home = () => {
  return ( 
    <div className="container-fluid p-0">
      <div className="container-fluid my-0 col-xl-12 col-lg-12 col-md-12 col-sm-12 col col-12 p-0 justify-content-around row">
        <section className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 topDivision justify-content-center">
          <div className="container-fluid row p-0">
            <section className="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-2">
              <div className="row pt-0">
                <div>
                  <div className="container-fluid col-lg-12 col-12 row p-0 justify-content-center topDiv">
                    <section className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 text-align-center">
                      <span className="text-white topNotify underlinedHeading">
                        Live Event Tracker 
                        For Upcomings  <br />
                        Daily
                      </span>
                    </section>
                    <section className="col-xl-6 col-lg-6 col-md-6 col-sm-11 underTopNotify">
                      <div className="row container-fluid p-0 justify-content-between">
                        <section className="col-lg-6 col-sm-5 lh-1">
                          <span className="font-weight-bolder text-white">100K+</span> <br />
                          <span className="display-6 textSecondColor">Site Users</span> <br />
                          <span className="small text-gray"><i>We&apos;ve gained such a lot of users in just two months</i></span>
                        </section>
                        <section className="col-lg-6 col-sm-5 lh-1">
                          <span className="font-weight-bolder text-white">76K+</span> <br />
                          <span className="display-6 textSecondColor">Reviews</span> <br />
                          <span className="small text-gray"><i>Ninety nine percent of the feedbacks are positibe</i></span>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="container-fluid co-lg-12 col-11 topImageContainer">
                  <img src="./tempyoutubevid.png" alt="" />
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 p-0 hotSection">
          <div className="container-fluid p-0">
            <div className="row p-0">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10 col-sm-10 chooseCategory">
                <select name="" id="" className="form-select form-select-sm" aria-label="Choose category">
                  <option value="Default" selected>Choose category</option>
                  <option value="Trending">Trending</option>
                  <option value="Live now">Live now</option>
                </select>
              </div>
              <div className="col-sm-12 p-0">
                <div className="col-sm-12 p-0">
                  <h5 className="textSecondColor manualSizePlus"><i>Latest</i></h5>
                  <div className="col-sm-12 p-0 table-responsive newsTable p-2">
                    <table className="table table-striped table-hover p-0">
                      <tbody>
                        <tr>
                          <td>
                            <Image src="/road.jpg" alt="Image" width="100%" height="100%" />
                          </td>
                          <td>
                            <span className="text-white">Ellon musk offers to buy twiter</span><br />
                            <span className="small text-gray">Uploaded on 20 Aug 2022</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image src="/34.jpg" alt="Image" width="100%" height="100%" />
                          </td>
                          <td>
                            <span className="text-white">Ellen&apos;s trip to Mumbai</span><br />
                            <span className="small text-gray">Uploaded on 20 Aug 2022</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image src="/road.jpg" alt="Image" width="100%" height="100%" />
                          </td>
                          <td>
                            <span className="text-white">Ellon musk offers to buy twiter</span><br />
                            <span className="small text-gray">Uploaded on 20 Aug 2022</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image src="/34.jpg" alt="Image" width="100%" height="100%" />
                          </td>
                          <td>
                            <span className="text-white">Ellen&apos;s trip to Mumbai</span><br />
                            <span className="small text-gray">Uploaded on 20 Aug 2022</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image src="/34.jpg" alt="Image" width="100%" height="100%" />
                          </td>
                          <td>
                            <span className="text-white">Ellen&apos;s trip to Mumbai</span><br />
                            <span className="small text-gray">Uploaded on 20 Aug 2022</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container p-1">
        <div className="row p-0">
          <h1 className="text-gray divHeadings hotTopics"><i>Hot topics</i></h1>
          <div className="hotSections">
            <section>
              <h3 className="text-white">AI Discussion with female actresses</h3>
              <div className="row row-cols-2 p-3 justify-content-around">
                <div className="singleDiscussion row col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Tonight Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina.jpeg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Ellen Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina2.jpg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Got Talent Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina3.png" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Review Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina4.jpg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Tonight Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina.jpeg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Ellen Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina2.jpg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Got Talent Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina3.png" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
                <div className="singleDiscussion row  col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12">
                  <div className="p-3  row container-fluid">
                    <section className="text-white col-xl-8 col-lg-8 col-md-8 col-8 col-sm-10">
                      <span className="joinUs">India</span> <br />
                      <span>Katrina Kaif</span> <br />
                      <span><small className="textSecondColor">In The Review Show</small></span> <br />
                      <span>Indian actress, Katrina Kaif said that she doesn&apos;t get it well</span> <br />
                      <span><i><small className="text-gray">Posted on 20 March 2022</small></i></span>
                    </section>
                    <section className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <Image src="/katrina4.jpg" width='100%' height="100%" />
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section className="container-fluid p-2">
              <h3 className="pb-3 text-white">Famous celebrities&apos; trip with families</h3>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-12 p-3 row celebFamilies">
                    <section className="col-xl-2 col-lg-2 col-md-3 col-sm- 12 col-12 p-3 text-align-center">
                      <Image src="/messi.jpeg" alt="Image" className="rounded" width="100%" height="100%" />
                    </section>
                    <section className="col-xl-10 col-lg-10 col-md-9 col-sm- 12 col-12 p-3">
                      <span className="joinUs">From New York Times</span> <br />
                      <span className="text-white">
                          The famous footballer, and one of the richest, Lionel Messi took
                          a trip to China on the previous Friday with his wife and children and they took the journey
                          in the private jet that they just bought two weeks ago
                      </span> <br />
                      <span className="text-gray"><i>Posted on 20 August 2018</i></span>
                    </section>
                  </div>
                  <div className="col-12 p-3 row celebFamilies">
                    <section className="col-xl-2 col-lg-2 col-md-3 col-sm- 12 col-12 p-3 text-align-center">
                      <Image src="/messi1.jpg" alt="Image" className="rounded" width="100%" height="100%" />
                    </section>
                    <section className="col-10">
                      <span className="joinUs">From New York Times</span> <br />
                      <span className="text-white p">
                          The famous footballer, and one of the richest, Lionel Messi took
                          a trip to China on the previous Friday with his wife and children and they took the journey
                          in the private jet that they just bought two weeks ago
                      </span> <br />
                      <span className="text-gray"><i>Posted on 20 August 2018</i></span>
                    </section>
                  </div>
                  <div className="col-12 p-3 row celebFamilies">
                    <section className="col-xl-2 col-lg-2 col-md-3 col-sm- 12 col-12 p-3 text-align-center">
                      <Image src="/messi.jpeg" alt="Image" className="rounded" width="100%" height="100%" />
                    </section>
                    <section className="col-10">
                      <span className="joinUs">From New York Times</span> <br />
                      <span className="text-white p">
                          The famous footballer, and one of the richest, Lionel Messi took
                          a trip to China on the previous Friday with his wife and children and they took the journey
                          in the private jet that they just bought two weeks ago
                      </span> <br />
                      <span className="text-gray"><i>Posted on 20 August 2018</i></span>
                    </section>
                  </div>
                  <div>
                    <span className="w3-round-xxlarge joinUs p-2 font-size-large" style={{display:"table",margin:"auto",transition:"0.3s"}}>Read more...</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <h1 className="text-white font-weight-bolder" style={{fontFamily:"'segoe ui",margin:"5% 0"}}><i>Get in touch</i></h1>
          <div>
            <form action="#">
              <div className="row justify-content-between">
                <div className="input-field form-group col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                  <label htmlFor="firstName" className="colorSecondColor">First Name</label>
                  <input type="text" className="form-control w3-round-large" id="firstName" />
                </div>
                <div className="input-field form-group col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                  <label htmlFor="secondName" className="colorSecondColor">Second Name</label>
                  <input type="text" className="form-control w3-round-large" id="secondName" />
                </div>
              </div>
              <div className="input-field col-sm-12 form-group">
                <label htmlFor="email" className="colorSecondColor">Email</label>
                <input type="text" className="form-control w3-round-large" id="email" />
              </div>
              <div className="input-field col-sm-12 form-group">
                <label htmlFor="message" className="colorSecondColor">Message</label>
                <textarea id="message" className="form-control w3-round"></textarea>
              </div>
              <div className="input-field">
                <button className="sendButton w3-round-xxlarge bg-gray border-none text-uppercase font-weight-bolder textSecondColor pt-2 pb-2 font-size-larger outline-none"><i>Send</i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;