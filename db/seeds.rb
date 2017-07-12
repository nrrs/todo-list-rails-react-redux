# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.destroyAll

todo1 = Todo.create!(title: 'Go to store', body: 'buy hammer', done: false)
todo2 = Todo.create!(title: 'Go to bank', body: 'deposit check', done: false)
todo3 = Todo.create!(title: 'Wash car', body: 'vaccuum and wax', done: false)
