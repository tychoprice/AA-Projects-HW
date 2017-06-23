class Cat < ActiveRecord::Base

  validates(
    :name,
    :birth_date,
    :color,
    :sex,
    presence: true
  )
end
