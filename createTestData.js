const bcrypt = require('bcrypt');

const createUsers = async (db) => {
  const salt = parseInt(process.env.SALT);
  const data = [
    { login: 'user', password: bcrypt.hashSync('user', salt), email: 'snakeice2000@mail.ru' },
    { login: 'user1', password: bcrypt.hashSync('user1', salt), email: 'user12000@mail.ru' },
  ];
  for (const item of data) {
    await db.User.create(item);
  };
};

const createCharacters = async (db) => {
  const data = [
    { name: 'character1', userLogin: 'user' },
    { name: 'character2', userLogin: 'user' },
    { name: 'character3', userLogin: 'user' },
  ];
  for (const item of data) {
    await db.Character.create(item);
  };
};

const createStates = async (db) => {
  const data = [
    { name: 'state1'},
    { name: 'state2'},
    { name: 'state3'},
  ];
  for (const item of data) {
    await db.State.create(item);
  };
};

const createLocalities = async (db) => {
  const data = [
    { name: 'locality1', stateName: 'state1'},
    { name: 'locality2', stateName: 'state1'},
    { name: 'locality3', stateName: 'state1'},
  ];
  for (const item of data) {
    await db.Locality.create(item);
  };
};

const createLocations = async (db) => {
  const data = [
    { name: 'alocation1', localityName: 'locality1'},
    { name: 'blocation2', localityName: 'locality1'},
    { name: 'clocation3', localityName: 'locality1'},
  ];
  for (const item of data) {
    await db.Location.create(item);
  };
};

const createPosts = async (db) => {
  const data = [
    { 
      characterName: 'character1', 
      locationName: 'alocation1', 
      text: "В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их."
    },
    { 
      characterName: 'character2', 
      locationName: 'alocation1', 
      text: "В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их."
    },
    { 
      characterName: 'character1', 
      locationName: 'alocation1', 
      text: "В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их."
    },
    { 
      characterName: 'character3', 
      locationName: 'alocation1', 
      text: "В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их."
    },
  ];
  for (const item of data) {
    await db.Post.create(item);
  };
};

module.exports = async (db) => {
  await createUsers(db);
  await createCharacters(db);
  await createStates(db);
  await createLocalities(db);
  await createLocations(db);
  await createPosts(db);
}