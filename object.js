const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    number1: 20,
    number2: 10,
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};
  
  function hitung(){
    return number1 + number2
  }

    const { number1, number2 } = user;
  
  const result = hitung(number1, number2)
  console.log(user.email);
  
  delete user['id'];
  // console.log(user);
  
  
  
