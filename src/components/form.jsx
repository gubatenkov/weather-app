import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.weatherMethod}>
                <input className="form__city" type="text" name="city" placeholder="City" required />
                <button className="form__btn glow-on-hover">Weather it</button>
            </form>
        )
    }
}

export default Form