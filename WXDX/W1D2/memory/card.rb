class Card

  # attr_reader :face_up

  def initialize(value, face_up = false)
    @value = value
    @face_up = face_up
  end

  def hide
    @face_up = false
  end

  def reveal
    @face_up = true
  end

  def to_s
  end

  def ==
  end
end
