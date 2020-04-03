import React from 'react'

class CreateExercise extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise)

    window.location = '/'
  }

  render() {
    return <div>CreateExercise</div>
  }
}

export default CreateExercise
