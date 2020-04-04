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

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }

    console.log(exercise)

    window.location = '/'
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user',
    })
  }

  render() {
    return <div>CreateUser</div>
  }
}

export default CreateUser
