function CourseDetailPage(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.instructor}</p>
      <p>{props.description}</p>
      <p>{props.enrollmentStatus}</p>
      <p>{props.duration}</p>
      <p>{props.shedule}</p>
      <p>{props.location}</p>
      <p>{props.prerequisites}</p>
      {props.syllabus.map((syll) => (
        <div>
          <div>{syll.week}</div>
          <div>{syll.topic}</div>
          <div>{syll.content}</div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetailPage;
