// ## import 
var React = require('react');
var Header = React.createFactory(require('./Header.jsx'));


// ## 主程式
var MainApp = React.createClass({

    
    // ##: getInitialState 
    // 這是 component API, 在 mount 前會跑一次，取值做為 this.state 的預設值
    getInitialState: function () {
        //var o = this.getTruth();
        //common.debugConsole({ title:"[MainApp] getInitialState", data: o}) 
        console.log(" <<----- Main.jsx ----->>")
        console.log("(0). getInitialState")
        return {};
    },
    
     
    // ##: getTruth 
    // 為何要獨立寫一支? 因為會有兩個地方會用到，因此抽出來
    // 目地：向各個 store 取回資料，然後統一 setState() 再一層層往下傳遞
    // getTruth: function () {
    //     // 是從 TodoStore 取資料(as the single source of truth)
    //     return ProfileStore.getAll();
    // },
    
    
    
    // ##: _onChange 
    /**
     * controller-view 偵聽到 model change 後
     * 執行這支，它操作另一支 private method 去跟 model 取最新值
     * 然後操作 component life cycle 的 setState() 將新值灌入元件體系
     * 就會觸發一連串 child components 跟著重繪
     */
    _onChange: function(){
        // 重要：從 root view 觸發所有 sub-view 重繪
        //this.setState( this.getTruth() );
    },
    
    
     // 主程式進入點
    componentWillMount: function () {
        console.log("(1). Main componentWillMount")
    },
    
   

    // -------------------------
    // 重要：root view 建立後第一件事，就是偵聽 store 的 change 事件
    componentDidMount: function () {
        console.log("(2). Main componentDidMount")
    },  


     
    //========================================================================
    // ## unmount
    // 元件將從畫面上移除時，要做善後工作
    componentWillUnmount: function() {
        console.log("(x). componentWillUnmount")
    },



    //========================================================================
    // ## update
    
    // ## 在 render() 前執行，有機會可先處理 props 後用 setState() 存起來
    componentWillReceiveProps: function (nextProps) {
        console.log("(3). componentWillReceiveProps")
    },

    // -------------------------
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("(4). shouldComponentUpdate")
        return true;
    },

    // -------------------------
    componentWillUpdate: function (nextProps, nextState) {
        console.log("(5). componentWillUpdate")
    },

    // -------------------------
    componentDidUpdate: function (prevProps, prevState) {
        console.log("(6). componentDidUpdate")
    },

    // handleChange: function (name) {
    //     common.debugConsole("handleChange >> name: " + name)
    //     if (!name) {
    //         return;
    //     }
    //     this.setState({ name: name })
    // },
    
    //========================================================================
    // ## render
    render: function () {
        return (
            <div className="main-container">
                <Header />
            </div> 
         )
	}
})


module.exports = MainApp;