import SingleList from "./SingleList";

function CourseListPage() {
  const CourseModel = [
    {
      id: "1",
      name: "'Introduction to React Native",
      image:
        "https://entri.app/blog/wp-content/uploads/2022/03/Untitled581-750x375.png",
      instructor: "John Doe",
    },
    {
      id: "2",
      name: "'Introduction to Javascript",
      image:
        "https://blob.sololearn.com/assets/introduction-javascript-cover.png",
      instructor: "Mark Devid",
    },
  ];

  return (
    <div>
      <div>
        {CourseModel.map((list) => (
          <SingleList
            id={list.id}
            name={list.name}
            image={list.image}
            instructor={list.instructor}
          ></SingleList>
        ))}
      </div>
    </div>
  );
}

export default CourseListPage;
