import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let totalExercises = 0;

  return (
    <>
      <Header course={course.name} />
      {course.parts.map((part) => {
        totalExercises += part.exercises;
        return (
          <>
            <Content part={part} />
          </>
        );
      })}

      <Total exercises={totalExercises} />
    </>
  );
}

export default App;
