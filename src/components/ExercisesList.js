import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ExercisesList extends React.Component {
  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exrcises: [] }
  }

  render() {
    return <div>ExercisesList</div>
  }
}

export default ExercisesList
