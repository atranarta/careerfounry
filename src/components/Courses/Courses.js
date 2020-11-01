import React, { useState, useEffect } from 'react';

import './courses.scss';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const course = await fetch(`https://private-e05942-courses22.apiary-mock.com/courses`);
      const data = await course.json();
      setCourses(data);
    }
    getCourses();
  }, []);

  return (
    <div className="courses">
      <h1>Available courses:</h1>
      <div>
        {
          courses.map(course => {
            return (
              <div key={course.slug} className="course">
                <div className="about">
                  <h2 className="title">{course.title}</h2>
                  <p className="author">by {course.author}</p>
                  <p className="nextStart">Next start – {course.next_start_formatted}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};


export default Courses;
