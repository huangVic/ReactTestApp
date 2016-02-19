// ## import 
var React = require('react');


var LogInButton = React.createClass({
     // ## render
     render: function() {
         return (
             <div>
               <li className="divider"></li>
               <li><i className="material-icons">input</i><div>登入</div><div className="clear_both"></div></li>
             </div>  
         );
     }
})

var LogOutButton = React.createClass({
     // ## render
     render: function() {
         return (
            <div>
                <li className="divider"></li>
                <li><i className="material-icons">undo</i><div>登出</div><div className="clear_both"></div></li>
            </div>
         );
     }
})




// ## 主程式
var Header = React.createClass({
  
  getDefaultProps : function () { 
      console.log(" <<----- Header.jsx ----->>")
      console.log("(00). Header getDefaultProps")
      return {};
  },
  
  // ##: getInitialState 
  // 這是 component API, 在 mount 前會跑一次，取值做為 this.state 的預設值
  getInitialState: function () {
      console.log("(0). Header getInitialState")
      return {count: 0};
  },
  
  handleOnChange: function(e) {
      this.setState({count: e.target.value.length});
  },
  
  handleLoginOnClick: function(e) {
      e.preventDefault();
      if (this.props.logged_in) { 
          if( confirm("確定要登出嗎?") ) {
               window.location.href = "/Auth/logout";
          }
      } else {
          window.location.href = "/Auth";
      }
  },
  
  // ## render
  render: function() {
    console.log(" Header: " + this.props.logged_in);
    // var loginButton;
    // if (this.props.logged_in) {
    //     loginButton = <LogOutButton />;
    // } else {
    //     loginButton = <LogInButton />;
    // }
    var loginClass = {};
    if (this.props.logged_in) {
        loginClass.display_name = "登出"
        loginClass.icon_name = "undo";
    } else {
        loginClass.display_name = "登入"
        loginClass.icon_name = "input";
    }
    
    return (
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                    <a href="../" className="navbar-brand">T</a>
              </div>
              <div className="navbar-collapse collapse" id="navbar-main">
                  <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                <button className="navbar-toggle" type="button">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                 <li className="menuUserName">
                                    <i className="material-icons">person</i>
                                    <div className="header_user_name">{this.props.logged_in?this.props.user_name:"匿名使用者"}</div>
                                    <div className="clear_both"></div>
                                </li>
                                <li>
                                    <i className="material-icons">settings</i>
                                    <div>設定</div>
                                    <div className="clear_both"></div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                   <i className="material-icons">{loginClass.icon_name}</i>
                                   <div onClick={this.handleLoginOnClick}>{loginClass.display_name}</div>
                                   <div className="clear_both"></div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                             <input type="text" className="form-control" placeholder="搜尋" onChange={this.handleOnChange}/>
                        </div>
                   </form>
              </div>
          </div>
        </div>
    );
  }
});

module.exports = Header;