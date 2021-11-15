import { DistributeVertical } from "react-bootstrap-icons";
const Newsletter = () => {
    return (
        <div>
            <div className="intro-header pb-3">
                <div className="container" align="center">

                    <div className="tab-content custom-tab-content" align="center">
                        <div className="subscribe-panel">
                            <h1>Subscribe Newsletter!!!</h1>

                            <form action="" method="post">

                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control input-lg" name="email" id="email" placeholder="Enter your Email" />
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <br /><br /><br />
                                <button onClick={(e) => {
                                    e.preventDefault();
                                     alert("Successfully Subscribed!") }} className="btn btn-info btn-lg">Subscribe Now!</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter;