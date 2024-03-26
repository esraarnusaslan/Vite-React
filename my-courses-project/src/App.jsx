import './App.css';
import Course from './components/Course';
import Header from './components/Header';
import { courses } from './Data';
import './css/Course.css';

function App() {
    return (
        <div>
            <Header />
            <div className="course-main">
                {courses?.map((course) => (
                    <Course key={course?.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default App;
