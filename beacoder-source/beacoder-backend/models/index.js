const Courses = require("./Courses.model");
const Assignments = require("./Assignments.model");
const CourseEnrollments = require("./CourseEnrollments.model");
const Users = require("./Users.model");
const CourseTopics = require("./CourseTopics.model");
const Quiz = require("./Quiz.model");
const Subtopics = require("./Subtopics.model");

const QuizSubmission = require('./QuizSubmission.model');
const AssignmentSubmission = require('./AssignmentSubmission.model');
const Notes = require('./Notes.model');
const Discussions = require('./Discussions.model');
const DiscussionReplies = require('./DiscussionReplies.model');
const PairProgramming = require('./PairProgramming.model');
const ProgressTrack = require('./ProgressTrack.model');
const Certificates = require('./Certificates.model');


Users.hasMany(CourseEnrollments, { foreignKey: "userId" });
CourseEnrollments.belongsTo(Users, { foreignKey: "userId" });

Courses.hasMany(CourseEnrollments, { foreignKey: "courseId" });
CourseEnrollments.belongsTo(Courses, { foreignKey: "courseId" });

Users.hasMany(Courses, { foreignKey: "instructorId" });   
Courses.belongsTo(Users, { as: "Instructor", foreignKey: "instructorId" }); 

Courses.hasMany(CourseTopics, {
  as: 'Topics',
  foreignKey: { name: 'courseId', allowNull: false },
  onDelete: 'CASCADE',
});
CourseTopics.belongsTo(Courses, {
  as: 'Course',
  foreignKey: { name: 'courseId', allowNull: false },
  onDelete: 'CASCADE',
});

CourseTopics.hasMany(Subtopics, { foreignKey: 'topicId' });
Subtopics.belongsTo(CourseTopics, { foreignKey: 'topicId' });

//quiz
Courses.hasMany(Quiz, { foreignKey: 'courseId' });
Quiz.belongsTo(Courses, { foreignKey: 'courseId' });

CourseTopics.hasMany(Quiz, { foreignKey: 'topicId' });
Quiz.belongsTo(CourseTopics, { foreignKey: 'topicId' });

Subtopics.hasMany(Quiz, { foreignKey: 'subtopicId' });
Quiz.belongsTo(Subtopics, { foreignKey: 'subtopicId' });

Courses.hasMany(Assignments, { foreignKey: 'courseId' });
Assignments.belongsTo(Courses, { foreignKey: 'courseId' });

// QuizSubmission
Users.hasMany(QuizSubmission, { foreignKey: 'userId' });
QuizSubmission.belongsTo(Users, { foreignKey: 'userId' });

Quiz.hasMany(QuizSubmission, { foreignKey: 'quizId' });
QuizSubmission.belongsTo(Quiz, { foreignKey: 'quizId' });

// AssignmentSubmission
Users.hasMany(AssignmentSubmission, { foreignKey: 'userId' });
AssignmentSubmission.belongsTo(Users, { foreignKey: 'userId' });

Courses.hasMany(AssignmentSubmission, { foreignKey: 'courseId' });
AssignmentSubmission.belongsTo(Courses, { foreignKey: 'courseId' });

Assignments.hasMany(AssignmentSubmission, { foreignKey: 'assignmentId' });
AssignmentSubmission.belongsTo(Assignments, { foreignKey: 'assignmentId' });

// Notes
Users.hasMany(Notes, { foreignKey: 'userId' });
Notes.belongsTo(Users, { foreignKey: 'userId' });

CourseTopics.hasMany(Notes, { foreignKey: 'subTopicId' });
Notes.belongsTo(CourseTopics, { foreignKey: 'subTopicId' });

// Discussions
Users.hasMany(Discussions, { foreignKey: 'userId' });
Discussions.belongsTo(Users, { foreignKey: 'userId' });

Courses.hasMany(Discussions, { foreignKey: 'courseId' });
Discussions.belongsTo(Courses, { foreignKey: 'courseId' });

// DiscussionReplies
Users.hasMany(DiscussionReplies, { foreignKey: 'userId' });
DiscussionReplies.belongsTo(Users, { foreignKey: 'userId' });

Discussions.hasMany(DiscussionReplies, { foreignKey: 'discussionId' });
DiscussionReplies.belongsTo(Discussions, { foreignKey: 'discussionId' });

// PairProgramming
Users.hasMany(PairProgramming, { foreignKey: 'userId' });
PairProgramming.belongsTo(Users, { foreignKey: 'userId' });

// ProgressTrack
Users.hasMany(ProgressTrack, { foreignKey: 'userId' });
ProgressTrack.belongsTo(Users, { foreignKey: 'userId' });

Courses.hasMany(ProgressTrack, { foreignKey: 'courseId' });
ProgressTrack.belongsTo(Courses, { foreignKey: 'courseId' });

// Certificates
Users.hasMany(Certificates, { foreignKey: 'userId' });
Certificates.belongsTo(Users, { foreignKey: 'userId' });

Courses.hasMany(Certificates, { foreignKey: 'courseId' });
Certificates.belongsTo(Courses, { foreignKey: 'courseId' });