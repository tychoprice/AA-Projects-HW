require_relative 'card'
class Board
  attr_reader :row, :col
  def initialize(pairs = 8)
    @grid = Array.new(4) { Array.new(4) }
    # populate
  end

  def populate
    rand_val = ([*1..8]+[*1..8]).shuffle
      @grid.each_index do |row|
        @grid[row].each_index do |col|
          @grid[row][col] = Card.new(rand_val.pop)
        end
      end
  end

  def [](pos)
    pos = row, col
    @grid[row][col]
  end

  # def [](pos)
  #   @pos = pos
  # end
  def []=(pos, value)
    pos = row, col
    @grid[row][pos] = value
  end

  def render
  end

  def won?
  end

  def reveal
  end
end
