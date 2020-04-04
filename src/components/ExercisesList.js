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

  deleteExercise(id) {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data))

    this.setState({
      exercises: this.state.exrcises.filter((el) => el._id !== id),
    })
  }

  render() {
    return <div>ExercisesList</div>
  }
}

export default ExercisesList
