import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ExercisesList extends React.Component {
  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exrcises: [] }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises/')
      .then((res) => {
        this.setState({
          exercises: res.data,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <div>ExercisesList</div>
  }
}

export default ExercisesList
