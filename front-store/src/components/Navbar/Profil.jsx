import React from 'react'

const Profil = () => {
  return (
      <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="view-account">
      <section className="module">
        <div className="module-inner">
          <div className="side-bar">
            <div className="user-info">
              <img
                className="img-profile img-circle img-responsive center-block"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <ul className="meta list list-unstyled">
                <li className="name">
                  Rebecca Sanders
                  <label className="label label-info">UX Designer</label>
                </li>
                <li className="email">
                  <a href="#">Rebecca.S@website.com</a>
                </li>
                <li className="activity">Last logged in: Today at 2:18pm</li>
              </ul>
            </div>
            <nav className="side-menu">
              <ul className="nav">
                <li className="active">
                  <a href="#">
                    <span className="fa fa-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-cog" /> Settings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-credit-card" /> Billing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-envelope" /> Messages
                  </a>
                </li>
                <li>
                  <a href="user-drive.html">
                    <span className="fa fa-th" /> Drive
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-clock-o" /> Reminders
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content-panel">
            <h2 className="title">
              Profile<span className="pro-label label label-warning">PRO</span>
            </h2>
            <form className="form-horizontal">
              <fieldset className="fieldset">
                <h3 className="fieldset-title">Personal Info</h3>
                <div className="form-group avatar">
                  <figure className="figure col-md-2 col-sm-3 col-xs-12">
                    <img
                      className="img-rounded img-responsive"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                  </figure>
                  <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                    <input type="file" className="file-uploader pull-left" />
                    <button
                      type="submit"
                      className="btn btn-sm btn-default-alt pull-left"
                    >
                      Update Image
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                    User Name
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Rebecca"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                    First Name
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Rebecca"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                    Last Name
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Sanders"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="fieldset">
                <h3 className="fieldset-title">Contact Info</h3>
                <div className="form-group">
                  <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                    Email
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="Rebecca@website.com"
                    />
                    <p className="help-block">This is the email </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                    Twitter
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="SpeedyBecky"
                    />
                    <p className="help-block">Your twitter username</p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                    Linkedin
                  </label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input
                      type="url"
                      className="form-control"
                      defaultValue="https://www.linkedin.com/in/lorem"
                    />
                    <p className="help-block">
                      eg. https://www.linkedin.com/in/yourname
                    </p>
                  </div>
                </div>
              </fieldset>
              <hr />
              <div className="form-group">
                <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    defaultValue="Update Profile"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</>
  )
}

export default Profil
