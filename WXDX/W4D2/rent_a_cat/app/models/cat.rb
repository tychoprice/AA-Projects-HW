class Cat < ActiveRecord::Base
  has_many(
    :cat_rental_requests,
    class_name: "CatRentalRequest",
    dependent: :destroy
    )

  validates(
    :name,
    :birth_date,
    :color,
    :sex,
    presence: true
  )
end
