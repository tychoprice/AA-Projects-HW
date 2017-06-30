class CatRentalRequest < ActiveRecord::Base
  # STATUS_STATES = %w(APPROVED DENIED PENDING)

  belongs_to :cat

  validates(
    :cat_id,
    :start_date,
    :end_date,
    :status,
    presence: true
  )

  # validates :status, inclusion: STATUS_STATES
  # validate :start_must_come_before_end
  # validate :does_not_overlap_approved_request

  def overlapping_requests
  end

  def overlapping_approved_requests
  end

end
