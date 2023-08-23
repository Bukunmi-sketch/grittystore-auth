<div className="form">

    <div className="form-container">

    <p className="contact-info">Login, to Grittystore</p>
                      <form onSubmit={handleLoginSubmit}>
                        <div className="namebox">
                          <label htmlFor="address">Email or  Mobile No </label>
                          <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} />
                        </div>


                        <div className="namebox">
                          <label htmlFor="address">Password</label>
                          <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} />
                        </div>

                        <div className="namebox">

                          <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                          <button type="submit" className="checkout-btn"> {buttonloading ? (<div class="loader"></div>) : (<span>Login</span>)} </button>
                        </div>

                        <div className="have-acount"> New User ?  <span onClick={onShowRegisterPage} style={{ fontWeight: "400" }}> Sign up </span> </div>
                      </form>
    </div>
</div>