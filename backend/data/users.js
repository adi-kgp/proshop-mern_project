import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Frost',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mangal Pandey',
    email: 'mangal@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
