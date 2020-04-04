import React from 'react'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
    }

    console.log(user)

    window.location = '/'
  }

  render() {
    return <div>CreateUser</div>
  }
}

export default CreateUser
