# table "courses"
#   t.string   "name"
#   t.integer  "prereq_id"
#   t.integer  "instructor_id"
#
# table "enrollments"
#   t.integer  "course_id"
#   t.integer  "student_id"

#table "users"
#   t.string   "name"

class User < ActiveRecord::Base

  has_many :enrollments,
  primary_key: :id,
  foreign_key: :student_id,
  class_name: 'Enrollment'

  has_many :enrolled_courses,
  through: :enrollments,
  source: :courses

  # primary_key: :id,
  # foreign_key: :prereq_id,
  # class_name: 'Course'
end
