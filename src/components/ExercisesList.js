import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Exercise from './Exercise'

class ExercisesList extends React.Component {
  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] }
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

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody>{this.exerciseList()}</tbody> */}
        </table>
      </div>
    )
  }
}

export default ExercisesList
