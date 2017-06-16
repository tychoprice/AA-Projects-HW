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

class Enrollment < ActiveRecord::Base
  belongs_to :courses,
    primary_key: :id,
    foreign_key: :course_id,
    class_name: 'Course'

  belongs_to :users,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: 'User'
end
