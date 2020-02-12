9.times do |i|
  Recipe.create(
    name: "Recipe #{i + 1}",
    ingredients: '5 ounces mixed spring greens, half a sweet onion, 2 cups cherry tomatoes, 2 cups croutons, 1/2 cup freshly grated Parmesan cheese, 1/3 cup sliced pepperoncini peppers, soft boiled eggs, avocado',
    instruction: 'Combine all ingredients in a large salad bowl, drizzle evenly with the vinaigrette, and toss until evenly combined. Serve sprinkled with extra Parmesan cheese.'
  )
end 