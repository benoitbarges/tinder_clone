puts "Destroying data..."

User.destroy_all

puts "Creating Users..."

mike = User.create!(
  email: 'mike@gmail.com',
  first_name: 'Mike',
  password: '123456',
  age: 25,
  description: 'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
  gender: 'man',
  location: 'San Fransisco'
)
mike.photos.attach(io: File.open("app/assets/images/avatars/mike.jpeg"), filename: "avatar.jpeg", content_type: "image/jpeg")

puts "#{mike.first_name} created !"

john = User.create!(
  email: 'john@gmail.com',
  first_name: 'John',
  password: '123456',
  age: 26,
  description: 'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
  gender: 'man',
  location: 'New York'
)
john.photos.attach(io: File.open("app/assets/images/avatars/john.jpeg"), filename: "avatar.jpeg", content_type: "image/jpeg")

puts "#{john.first_name} created !"

emilie = User.create!(
  email: 'emilie@gmail.com',
  first_name: 'Emilie',
  password: '123456',
  age: 23,
  description: 'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
  gender: 'woman',
  location: 'San Fransisco'
)
emilie.photos.attach(io: File.open("app/assets/images/avatars/emilie.jpeg"), filename: "avatar.jpeg", content_type: "image/jpeg")

puts "#{emilie.first_name} created !"

fanny = User.create!(
  email: 'fanny@gmail.com',
  first_name: 'Fanny',
  password: '123456',
  age: 25,
  description: 'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
  gender: 'woman',
  location: 'New York'
)
fanny.photos.attach(io: File.open("app/assets/images/avatars/fanny.jpeg"), filename: "avatar.jpeg", content_type: "image/jpeg")

puts "#{fanny.first_name} created !"
