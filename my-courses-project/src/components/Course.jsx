import React from 'react';

function Course({ course }) {
    const { title, description, price, link, image } = course;
    return (
        <div className="course">
            <div>
                <img src={image} width={250} height={250} className='course-img'/>
                <h4 className="course-title">{title}</h4>
                <p className="course-desc">{description}</p>
                <h3 className="course-price">{price} $</h3>
                <div className="course-link">
                    <a href={link}>Enroll</a>
                </div>
            </div>
        </div>
    );
}

export default Course;
