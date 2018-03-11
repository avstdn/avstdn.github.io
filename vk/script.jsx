class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', select: 'two'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSelectChange(event) {
        this.setState({select: event.target.value});
    }

    render() {
        return <div>
            <div className="App">
                <header className="App-header">
                  <img src="logo.svg" className="App-logo" alt="logo" />
                  <h1 className="App-title">VK code converter</h1>
                </header>
            </div>
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8" id="wrapper">
                        <Textarea
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleSelectChange={this.handleSelectChange}
                        />
                        <Result
                             value={this.state.value}
                             select={this.state.select}
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Textarea extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div id="sample-select">
                    <label>
                        Choose number of spaces:
                    </label>
                    <select onChange={this.props.handleSelectChange}>
                      <option value="two">two</option>
                      <option value="four">four</option>
                    </select>
                </div>
                <textarea id="sample" onChange={this.props.handleChange} />
            </form>
        );
    }
}

class Result extends React.Component {
    parseInput() {
        let select = this.props.select;
        return select === 'two' ?
        this.props.value.replace(/  /g, '&#12288;') :
        this.props.value.replace(/    /g, '&#12288;');
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