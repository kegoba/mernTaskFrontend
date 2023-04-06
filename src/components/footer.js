import React from "react"


const Footer =()=>{
    const year = new Date()

    return (
        <div className=" footer-down text-center">
            <div className="container ">
                <div className="row ">
                    <div className="col  thin-foot">

                        <p className="handle"> Social-media Handle </p>
                        <p className="">
                            <i className="fa fa-facebook" />
                            <i className="fa fa-twitter" />
                            <i className="fa fa-instagram" />
                            <i className="fa fa-linkedin " />
                            <a className="navlink fa fa-whatsapp" href={"https://wa.me/2347038034761"} > <i /> </a>
                        </p>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyright"> Copyright @ {year.getFullYear()}; </p>
                </div>
            </div>
        </div>
    );
}


export default Footer;