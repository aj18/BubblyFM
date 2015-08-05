var React = require("react");
var MyDialogButton = React.createClass({
          
    componentDidMount: function(){
         
    },
    childHandleClick: function(e) {
        debugger;
        alert(this.props.pageUrl);
        
        
    },
    onbuttonclick:function(){
        BootstrapDialog.show({
            title: '',
            message: jQuery('<div></div>').load(this.props.pageUrl),
            buttons:[{
                id:this.props.pageUrl,
                label: 'Close',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }]
        });

    },
    render: function(){
        return (
            <button type="button" id={this.props.pageUrl} onClick={this.onbuttonclick.bind(this)} className="btn btn-link" ><i  className="fa fa-external-link-square"></i></button>
         )
          }
          });

module.exports = MyDialogButton;