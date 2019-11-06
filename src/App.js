import React , {Component} from 'react';
import CourseForm from './component/CourseForm/CourseForm';
import CourseList from './component/CourseList/CourseList'

class App extends Component {
  state = {
    courses: [
      {name: 'html'},
      {name: 'Css'},
      {name: 'Js'},
    ],
    current : ''
  }

  // updateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // addCourse
  addCourse = (e) => {
    e.preventDefault()
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
    console.log('Add Course!!!')
  }

  // deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }
 
  // edit Course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    const {courses} = this.state;
    const courseList = courses.map( (course , index)=> {
      return <CourseList deleteCourse={this.deleteCourse} index={index} details={course} key={index} editCourse={this.editCourse} />

    })

    return (
      <div className="App">
        <h1>Add Course</h1>
        <CourseForm  current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
           <ul>
           {courseList}
          </ul>
      </div>
    ) 
  }
}

export default App;
