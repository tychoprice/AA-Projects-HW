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

class Course < ActiveRecord::Base
  has_many :enrollments,
  primary_key: :id,
  foreign_key: :student_id,
  class_name: 'Enrollment'

  has_many :enrolled_students,
  through: :enrollments,
  source: :users

  has_many :instructors,
  primary_key: :instructor_id,
  foreign_key: :id,
  class_name: 'User'

  has_many :prerequisites,
  primary_key: :prereq_id,
  foreign_key: :id,
  class_name: 'Course'

  # has_many and belongs_to can be interchanged
  # if primary and foreign keys are swapped

end
