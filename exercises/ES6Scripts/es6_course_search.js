let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//USE .find() .filter()

// When does the PROG200 course start?
console.log(courses.find(c => c.CourseId === "PROG200").StartDate); // 11/22/22

// What is the title of the PROJ500 course?
console.log(courses.find(c => c.CourseId === "PROJ500").Title)

// What are the titles of the courses that cost $50 or less?
courses.filter(c => c.Fee <= 50).forEach(c => console.log(c.Title));

// What classes meet in "Classroom 1"?
// console.log(courses.filter(c => c.Location === "Classroom 1")); //CANT SEE INSIDE
courses.filter(c => c.Location === "Classroom 1").forEach(console.log); //SHOWS EACH
