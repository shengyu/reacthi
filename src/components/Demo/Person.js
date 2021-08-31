import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        age: PropTypes.number
    }
    static defaultProps = {
        gender: "hello",
        age: 21
    }

    render(){
        const {name, gender, age} = this.props
        return (
            <ul>
                <li>Name: {name}</li>
                <li>Gender: {gender}</li>
                <li>Age: {age}</li>
            </ul>
        )
    }
}

export default Person