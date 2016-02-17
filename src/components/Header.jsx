// ## import 
var React = require('react');




// ## 主程式
var Header = React.createClass({
  
  
  // ##: getInitialState 
  // 這是 component API, 在 mount 前會跑一次，取值做為 this.state 的預設值
  getInitialState: function () {
      console.log(" <<----- Header.jsx ----->>")
      console.log("(0). Header getInitialState")
      return {count: 0};
  },
  
  handleOnChange: function(e){
      this.setState({count: e.target.value.length});
  },
 
  
  // ## render
  render: function() {
    return (
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                    <a href="../" className="navbar-brand">T</a>
                    <span className="testCount">{this.state.count}</span>
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
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
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