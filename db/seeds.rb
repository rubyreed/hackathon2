# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(email: 'test@test.com', password: 123456)
u2 = User.create(email: "test2@test.com", password: 123456)
u3 = User.create(email: "test3@test.com", password: 123456)
u4 = User.create(email: "test4@test.com", password: 123456)


recipe1 = u1.recipes.create(name: "recipe1", instruction: "Garlic", category: "idk")
recipe1.ingredients.create(name: "4 Garlic")

recipe2 = u2.recipes.create(name: "recipe2")
recipe2.ingredients.create(name: "6 tbsp of peanut butter")

recipe3 = u3.recipes.create(name: "recipe3")
recipe3.ingredients.create(name: "2 cups of water")

recipe4 = u4.recipes.create(name: "recipe4")
recipe4.ingredients.create(name: "400ml of chicken stock")

shoppinglist1 = u1.shoppinglists.create(name:"dinner")
shoppinglist1.ingredients.create(name: "2 cups rice")

shoppinglist2 = u2.shoppinglists.create(name:"healthy food")
shoppinglist2.ingredients.create(name: "2 bunches of kale")


shoppinglist3 = u3.shoppinglists.create(name:"lazy days")
shoppinglist3.ingredients.create(name: "2 bags of chips")


shoppinglist4 = u4.shoppinglists.create(name:"superbowl party")
shoppinglist4.ingredients.create(name: "12 chicken wings")
