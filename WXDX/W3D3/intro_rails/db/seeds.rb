# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

wood = House.create(address: '1750 Wood')
market = House.create(address: '123 Market')

ty = Person.create(name: 'Tycho', age: 25, house_id: wood.id)
ali = Person.create(name: 'Ali', age: 23, house_id: market.id)
dev = Person.create(name: 'Devansh', age: 25, house_id: market.id)
