class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state = {detail: 'Here are the details!', showed: false}
    }

    handleShow(){
        this.setState((prevState) => {
            return {
                showed: !prevState.showed
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleShow}>
                    {this.state.showed ? 'Hide detail' : 'Show detail'}
                </button>
                <div>
                    {this.state.showed ? <p>{this.state.detail}</p> : null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));


// const app = {
//     detail: 'This is a detail you can see!',
//     displayed: false
// }

// var appRoot = document.getElementById('app');

// const toggle = () => {
//     app.displayed = !app.displayed;
//     renderNew();
// }
// const showDetail = () => {

// }
// const renderNew = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>
//                 {app.displayed ? 'Hide detail' : 'Show details'}
//             </button>
//             {app.displayed ? <p>{app.detail}</p> : null}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// renderNew();