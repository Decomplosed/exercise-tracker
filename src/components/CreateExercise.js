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
  }

  render() {
    return <div>CreateExercise</div>
  }
}

export default CreateExercise
