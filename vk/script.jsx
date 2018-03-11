class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return <div>
            <div className="App">
                <header className="App-header">
                  <img src="logo.svg" className="App-logo" alt="logo" />
                  <h1 className="App-title">VK code converter</h1>
                </header>
            </div>
            <div id="wrapper">
                <Textarea
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Result
                     value={this.state.value}
                />
            </div>
        </div>
    }
}

class Textarea extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <textarea id="sample" onChange={this.props.handleChange} />
            </form>
        );
    }
}

class Result extends React.Component {
    parseInput() {
        console.log(this.props.value);
        return this.props.value.replace(/    /g, '&#12288;');
    }
    render() {
        return <div id="div-sample">
        <span>
            {this.parseInput()}
            </span>
        </div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('root')
);