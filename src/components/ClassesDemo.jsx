import React from "react";
import axios from "axios";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.loadData(this.props.country);
  }

  loadData(country) {
    axios
      .get(`https://date.nager.at/api/v2/publicholidays/2019/${country}`)
      .then(result => this.setState({ result }))
      .catch(error => this.setState({ error }));
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Demo;
