// ## import 
var React = require('react');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');
var Tooltip = require('react-bootstrap/lib/Tooltip');


var StatusItem = React.createClass({
    
    getDefaultProps : function () { 
        return {};
    },
        
    getInitialState: function () {
        return { 
            data: this.props.data, 
            length: this.props.length 
        };
    },
    
    componentWillMount: function () {
        
    },
    
    componentDidMount: function () {
        
    },  
    
    handleOnHover: function(e) {
        //console.log(e.target)
        //var toolTip = (<Tooltip>Check this info.</Tooltip>);
    },
    
    render: function () {

       var name = this.state.data.name;
       var class_name = "timeline-li";
       
       if ( this.state.data.index == 0){
           class_name += " start";
       }
       
       if ( (this.state.data.index + 1) == this.state.length ) {
           class_name += " end";
       }
       
       var styles = {};
       if (this.state.length > 0){
           var width = 100/this.state.length;
           styles.width = width + "%";
       }
       
       var approver = this.state.data.approver;
       
       var toolTip = <Tooltip id={"toolTip-" + this.state.data.index} >簽核者: {approver}</Tooltip>;
     
       return ( <OverlayTrigger placement="top" overlay={toolTip}>
                   <li className={class_name} style={styles}><a href="#0" className="" data-toggle="tooltip" data-placement="top" >{name}</a></li>
                 </OverlayTrigger>
              )
    }
})





// ## 主程式
var StatusFilter = React.createClass({
    
        
    getDefaultProps : function () { 
        return {};
    },
        
    getInitialState: function () {
        return { list: [] };
    },
    
    componentWillMount: function () {
        
    },
    
    
    // 若從資料庫取回資料發生錯誤, 由此資料替代為預設值
    getDefaultStatusList : function () {
      return [
            {
                index: 0,
                status: 10,
                name: "暫存單據",
                approver: "Vic.Huang"
            },
            {
                index: 1,
                status: 100,
                name: "審核中",
                approver: "Steve.J"
            },
            {
                index: 2,
                status: 200,
                name: "處理中",
                approver: "Jamse.Lin"
            },
            {
                index: 3,
                status: 300,
                name: "已回覆",
                approver: "Nash.Chen"
            },
            {
                index: 4,
                status: 1000,
                name: "結案單據",
                approver: "Vic.Huang"
            }
        ];
    },
    
    componentDidMount: function () {
         $.get("/Status/defaultList", function(result){
             if (result.success == "ok" && result.status == 100) {
                 if (this.isMounted()) {
                    var itemList = [];
                    for ( var i = 0; i < result.list.length; i++) {
                        itemList.push({
                            index: i ,
                            status: result.list[i].status,
                            name: result.list[i].status_name,
                            approver: ""
                        }) 
                    }
                    this.setState({list:itemList});
                 } 
             }
         }.bind(this))
    },  
    
    
    // ## render
    render: function () {
        
        var rows = [];
        for (var i = 0 ; i < this.state.list.length; i++) {
            rows.push(<StatusItem key={"statusItem-" + this.state.list[i].index } data={this.state.list[i]} length={this.state.list.length} />);
        }
        
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                     <section className="horizontal-sataus-timeline">
                            <div className="timeline">
                                <div className="events-wrapper">
                                    <div className="events">
                                        <ol className="timeline-ol">
                                           {rows}
                                        </ol>   
                                    </div>           
                                </div>
                            </div>
                     </section> 
                </div>
            </div> 
         )
	} 
});


module.exports = StatusFilter;