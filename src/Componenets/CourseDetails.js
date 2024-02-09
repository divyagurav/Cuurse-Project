import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CourseDetailPage from "./CourseDetailPage";

function CourseDetails() {
  const params = useParams();
  const CourseModel = [
    {
      id: "1",
      name: "'Introduction to React Native",
      image:
        "https://entri.app/blog/wp-content/uploads/2022/03/Untitled581-750x375.png",
      instructor: "John Doe",
      enrollmentStatus: "Open",
      description:
        "Learn the basics of React Native development andbuild your first mobile app.",
      duration: "10 weeks",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React Native",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
    {
      id: "2",
      name: "'Introduction to Javascript",
      image:
        "https://blob.sololearn.com/assets/introduction-javascript-cover.png",
      instructor: "Mark Devid",

      enrollmentStatus: "close",
      description:
        "Learn the basics of Javascript development andbuild your first mobile app.",
      duration: "8 weeks",
      prerequisites: [
        "Basic JavaScript knowledge",
        "Familiarity with Javascrpit",
      ],
      schedule: "Tuesdays and Thursdays, 6:00 PM - 9:00 PM",
      location: "offline",
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Javascipt",
          content:
            "Overview of Javascript, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content: "Creating a simple mobile app using Javascript",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
  ];

  const quote = CourseModel.find((quote) => quote.id === params.detailId);

  return (
    <div>
      <CourseDetailPage
        name={quote.name}
        description={quote.description}
        duration={quote.duration}
        enrollmentStatus={quote.enrollmentStatus}
        location={quote.location}
        shedule={quote.schedule}
        prerequisites={quote.prerequisites}
        syllabus={quote.syllabus}
      ></CourseDetailPage>
    </div>
  );
}

export default CourseDetails;
