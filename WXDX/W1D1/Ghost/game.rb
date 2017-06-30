require 'set'
require_relative 'player'

class Game
  def initialize(*players)
    # words = File.readlines("dictionary.txt").map(&:chomp)
    # @dictionary = Set.new(words)
    @players = players
    @scores = Hash.new { |player, scores| scores[players] = 0 }
    @fragment = ""
  end

  def play_round
    puts "Standings:"
    @players.each do |player|
      puts "#{player} : #{losses}"
    end
    take_turn(current_player)
  end

  def current_player
    @players.first
  end

  def previous_player
    @players.last
  end

  def next_player!
    @players.rotate!
    take_turn(current_player)
  end

  def take_turn(player)
    puts "#{current_player}'s Turn!"
    puts "Current: #{@fragment}"
    puts "Enter any letter"
    letter = gets.chomp
    if valid_play?(letter)
      @fragment << letter
      if @dictionary.include?(@fragment)
        puts "YOU LOSE!"
        current_player.losses
      end
    end
    next_player!
  end

  def valid_play?(string)
    ('a'..'z').include?(string.downcase)
  end

  # def run
  #   play_round until @player1.losses == 5 || @player2.losses = 5
  # end

  def losses

  end

  # def record
  # end
end
